import React from 'react'
import styled, { withTheme } from 'styled-components';

const Button = props => {
    const StyledButton = styled.div`
    margin: 8px auto;
    padding: 8px;
    min-width: 50px;
    max-width: 200px;
    max-height: 150px;
    border-radius: 2vh;
    background-color: ${props.selected ? "#0f11cc" : props.theme.palette.secondary};
    border: 2px solid blue;
    cursor: pointer;
    font-size: 1vw;
    color: white;
    @media screen and (max-width: 768px){
        margin: 2px;
        padding: 4px;
    }
    &:hover{
        background-color: white;
        color: ${props.theme.palette.secondary}
    }
    
    `
    

    return(<StyledButton onClick={props.onClick}>{props.children}</StyledButton>)
}

export default withTheme(Button);