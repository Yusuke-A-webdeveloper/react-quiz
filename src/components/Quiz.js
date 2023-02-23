import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Modal from './Modal';

const Quiz = () => {
  const { questions, index, correctAnswers, nextQuestion, modal, matchAnswer } =
    useGlobalContext();

  const newQuestion = questions[index];
  const { question, correct_answer, incorrect_answers } = newQuestion;

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <>
      {modal && <Modal />}
      <Wrapper>
        <div className="score">
          <p>
            Correct Answers : {correctAnswers} / {index}
          </p>
        </div>
        <article>
          <div className="title">
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
          </div>
          <main>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => matchAnswer(correct_answer === answer)}
                />
              );
            })}
          </main>
        </article>
        <footer className="submit-btn">
          <button onClick={nextQuestion}>next question</button>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  padding: 30px 30px;
  width: 90%;
  .score {
    text-align: right;
  }
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
    h2 {
      font-size: 35px;
      color: var(--header);
    }
    main {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 650px;
      margin: 30px auto 0;
      button {
        display: inline-block;
        font-size: 18px;
        letter-spacing: 1px;
        padding: 8px;
        width: 100%;
        background: var(--info);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s ease-out;
        &:hover {
          background: var(--primary);
        }
      }
    }
  }
  footer {
    text-align: right;
    button {
      display: inline-block;
      font-size: 18px;
      letter-spacing: 1px;
      padding: 8px 60px;
      background: var(--warning);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s ease-out;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  @media (max-width: 780px) {
    article main {
      width: 100%;
    }
  }
  @media (max-width: 415px) {
    article h2 {
      font-size: 25px;
    }
  }
`;

export default Quiz;
