import styled from 'styled-components';

export const Container = styled.main`
  width: 1120px;
  height: 100vh;
  margin: 0.5rem auto;
  background-color: #fcfcfc;
  padding: 1rem;
`;

export const Content = styled.div`
  padding: 2rem 0;
  margin: 5px;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  hr {
    outline: 1px solid #333;
    margin: 20px 10px;
  }

  h2 {
    font-size: 1rem;
    margin: 10px;
  }

  button {
    margin: 0.5rem;
  }
`;
