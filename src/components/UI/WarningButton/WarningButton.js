import React from 'react'
import styled, { withTheme } from 'styled-components';

const Button = props => {
    const StyledButton = styled.div`
    margin: 8px auto;
    padding: 16px;
    min-width: 30px;
    max-width: 200px;
    border-radius: 2vh;
    background-color: ${props.theme.palette.primary};
    border: 2px solid black;
    cursor: pointer;
    font-size: 1vw;
    color: white;
    transition: 100ms ease-in;
    @media screen and (max-width: 768px){
        margin: 2px;
        padding: 4px;
    }
    &:hover{
        background-color: white;
        color: ${props.theme.palette.primary};
        border: 2px solid  ${props.theme.palette.primaryDark};
    }
    
    `
    
    return(<StyledButton onClick={props.onClick}>{props.children}</StyledButton>)
}

export default withTheme(Button);