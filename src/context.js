import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const AppContext = React.createContext();
const baseUrl = 'https://opentdb.com/api.php?';

const initialState = {
  loading: false,
  waiting: true,
  modal: false,
  questions: [],
  correctAnswers: 0,
  index: 0,
  error: { show: false, msg: '' },
  quiz: { amount: 10, category: 'sports', difficulty: 'easy' },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchQuestion = async (url) => {
    dispatch({ type: 'LOADING' });
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.results.length > 0) {
      dispatch({ type: 'FETCH_QUESTIONS', payload: data.results });
    } else {
      dispatch({ type: 'DISPLAY_ERROR' });
    }
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const matchAnswer = (value) => {
    if (value) {
      dispatch({ type: 'MATCH_ANSWER' });
    }
    nextQuestion();
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const newName = e.target.name;
    dispatch({ type: 'CHANGE_VALUES', name: newName, value: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { amount, category, difficulty } = state.quiz;
    const url = `${baseUrl}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestion(url);
  };

  const backToSetupForm = () => {
    dispatch({ type: 'BACK_TO_DEFAULT' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSubmit,
        nextQuestion,
        backToSetupForm,
        matchAnswer,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
