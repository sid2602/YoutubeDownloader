import styled from "styled-components";

export const TTable = styled.table`
  border-collapse: collapse;
  td,
  th {
    padding: 20px;
    border: 1px solid #d6d6d6;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 600px) {
    td,
    th {
      padding: 5px;
    }
  }
`;

export const DownloadButton = styled.button`
  padding: 12px 28px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: 1px solid #409143;
  outline: none;
  transition: 0.2s;

  &:hover {
    background-color: #409143;
  }

  &:active {
    transform: translateY(4px);
  }

  @media (max-width: 600px) {
    padding: 6px 14px;
  }
`;
