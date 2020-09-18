import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 1150px;
  text-align: center;
  margin: 10vh auto;
  border-top: 2px solid #d6d6d6;
  h3 {
    font-size: 2em;
    margin-top: 5vh;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1.5em;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 5vh;
  p {
    display: block;
    width: 25%;
    text-align: left;
    font-size: 1.2em;
  }

  span {
    font-weight: bold;
    color: red;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
      width: 50%;
    }
  }
`;
