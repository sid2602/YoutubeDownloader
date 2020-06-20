import styled from 'styled-components';

export const Inp = styled.input`
   width: 500px;
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
    font-size: 2em;
    border: 2px solid black;
    padding: 5px 10px;
    color:white;

    margin-left:20px;
    
    background-color: red;

`;



