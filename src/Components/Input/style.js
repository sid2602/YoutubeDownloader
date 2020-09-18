import styled from "styled-components";

export const Main = styled.main`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Inp = styled.input`
  width: 600px;
  height: 50px;
  border: 3px solid red;
  border-radius: 5px;

  font-size: 2em;
  margin: 0;
  outline: none;

  ::placeholder {
    color: black;
  }
  :focus {
    border-color: red;
  }

  @media (max-width: 1200px) {
    width: 80%;
    margin-bottom: 1em;
  }
`;

export const Button = styled.button`
  display: block;
  font-size: 1.5em;
  border: 2px solid red;
  padding: 12px 28px;
  color: white;
  outline: none;
  margin-left: 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #d60000;
  transition: 0.2s;

  &:hover {
    background-color: red;
    margin-left: 0;
  }

  &:active {
    transform: translateY(4px);
  }

  @media (max-width: 1200px) {
    &:hover {
      background-color: red;
      margin-left: 20px;
      transform: translateY(4px);
    }
  }
`;
