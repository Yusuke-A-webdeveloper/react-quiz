const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, waiting: false, loading: true };
    case 'FETCH_QUESTIONS':
      return {
        ...state,
        waiting: false,
        loading: false,
        error: { show: false, msg: '' },
        questions: action.payload,
      };
    case 'CHANGE_VALUES':
      const newQuiz = { ...state.quiz, [action.name]: action.value };
      return { ...state, quiz: newQuiz };
    case 'DISPLAY_ERROR':
      return {
        ...state,
        waiting: true,
        loading: false,
        error: {
          show: true,
          msg: `try again with other values.`,
        },
      };
    case 'NEXT_QUESTION':
      const newIndex = state.index + 1;
      if (newIndex > state.questions.length - 1) {
        return { ...state, index: 0, modal: true };
      }
      return { ...state, index: newIndex };
    case 'MATCH_ANSWER':
      const newScore = state.correctAnswers + 1;
      return { ...state, correctAnswers: newScore };
    case 'BACK_TO_DEFAULT':
      return {
        ...state,
        modal: false,
        correctAnswers: 0,
        index: 0,
        waiting: true,
      };
    default:
      throw new Error('there is no such action type');
  }
};

export default reducer;
