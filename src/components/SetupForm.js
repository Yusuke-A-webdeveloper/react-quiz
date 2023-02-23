import styled from 'styled-components';
import { useGlobalContext } from '../context';

const SetupForm = () => {
  const { handleSubmit, error, quiz, handleChange } = useGlobalContext();

  return (
    <Wrapper>
      <h2>set up quiz</h2>
      <form>
        <div className="input-con">
          <label htmlFor="amount">select number of questions</label>
          <input
            type="number"
            name="amount"
            min="1"
            max="50"
            value={quiz.amount}
            onChange={handleChange}
          />
        </div>
        <div className="input-con">
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="input-con">
          <label htmlFor="difficulty">difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error.show && (
          <div className="error">
            <h4>{error.msg}</h4>
          </div>
        )}
        <div className="submit-btn" onClick={handleSubmit}>
          <button type="submit">start</button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  padding: 20px 30px;
  width: 450px;
  h2 {
    color: var(--header);
    font-size: 35px;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  form {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .input-con {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      input,
      select {
        width: 100%;
        padding: 5px 10px;
        font-size: 18px;
        border-radius: 5px;
      }
      label {
        font-size: 18px;
        text-transform: capitalize;
      }
    }
    .submit-btn {
      width: 100%;
      margin-bottom: 20px;
      button {
        display: inline-block;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 8px;
        width: 100%;
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
    .error {
      h4 {
        color: var(--danger);
        font-size: 16px;
      }
    }
  }
`;

export default SetupForm;
