import styled from 'styled-components';

export const Inp = styled.input`
   width: 600px;
    height: 50px;
    border: 3px solid red;
    border-radius: 5px;
    
    font-size: 2em;
    margin: 0;
    outline: none;
    :focus{
        border-color: red;
    }
`;

export const Button = styled.button`
    display: inline;
    font-size: 1.5em;
    border: 2px solid red;
    padding: 12px 28px;
    color:white;
    outline: none;
    margin-left:20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #f44336;
    transition: 0.2s;
    &:hover{
        background-color: red;
    }

    &:active{
        
        transform: translateY(4px);
    }

`;



