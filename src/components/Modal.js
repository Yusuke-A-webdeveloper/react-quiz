import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { backToSetupForm, correctAnswers, questions } = useGlobalContext();

  return (
    <Wrapper>
      <main>
        <h2>congrats!</h2>
        <p>your score is {(correctAnswers / questions.length) * 100}%</p>
        <footer>
          <button onClick={backToSetupForm}>back to selection</button>
        </footer>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 450px;
    height: 300px;
    h2 {
      font-size: 40px;
      color: var(--header);
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    p {
      font-size: 30px;
    }
    footer {
      button {
        display: inline-block;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 8px 15px;
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
`;

export default Modal;
