import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  margin-top: 5vh;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Movie = styled.article`
  width: 600px;
  margin: 0 70px;
  img {
    width: 100%;
    border: 1px solid #d6d6d6;
  }

  p {
    text-align: center;
    font-size: 1.5em;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;

    p {
      font-size: 1.2em;
    }
  }
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 66%;
  margin: 0 70px;
`;

export const DownloadTypes = styled.div`
  display: flex;

  width: 100%;
`;

export const TypeOfDownload = styled.a`
  display: flex;
  font-size: 1.5em;
  color: red;
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  bordr-radius: 10px;
  transition: 0.2s;
  &:hover {
    background-color: #e6e6e6;
  }

  &.active {
    border: 1px solid #d6d6d6;
    border-bottom: 0;
    background-color: #e6e6e6;
  }
`;
