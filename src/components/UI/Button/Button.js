import React from 'react'
import styled, { withTheme } from 'styled-components';

const Button = props => {
    const StyledButton = styled.div`
    margin: 8px;
    padding: 8px;
    flex: 1;
    border-radius: 2vh;
    background-color: ${props.selected ? "#0f11cc" : props.theme.palette.secondary};
    border: 2px solid blue;
    cursor: pointer;
    font-size: .5;
    @media screen and (max-width: 768px){
        margin: 4px;
    }
    &:hover{
        background-color: white;
        color: ${props.theme.palette.secondary}
    }
    
    `
    

    return(<StyledButton onClick={props.onClick}>{props.children}</StyledButton>)
}

export default withTheme(Button);