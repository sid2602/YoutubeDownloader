import styled from "styled-components";

const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto 2em auto;
  border-radius: 10px;
  border: 2px solid #d6d6d6;

  @media (max-width: 1200px) {
    width: 80%;
  }
`;

export default Wrapper;
