import React from "react";
import styled, { keyframes } from "styled-components";

const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 2em auto;
  height: 30px;
  max-width: 600px;
`;

const animation = keyframes`
    from{
        width:0;
    }

    to{
        width:100%;
    }
`;

const ProgressDone = styled.div`
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  opacity: 1;
  animation: ${animation} 0.8s ease-in-out;
`;

const ProgresBar = () => {
  return (
    <Progress>
      <ProgressDone />
    </Progress>
  );
};

export default ProgresBar;
