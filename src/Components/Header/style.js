import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;

  i {
    margin-left: 20px;
    color: red;
  }

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;
