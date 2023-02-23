import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <h2>loading...</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    text-transform: capitalize;
    color: var(--header);
    font-size: 30px;
  }
`;

export default Loading;
