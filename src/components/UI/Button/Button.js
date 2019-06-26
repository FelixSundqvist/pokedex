import React from 'react'
import styled, { withTheme } from 'styled-components';

const Button = props => {
    const StyledButton = styled.div`
    margin: 8px;
    padding: 8px;
    flex: 0 0 50px;
    border-radius: 2vh;
    background-color: ${props.theme.palette.secondary};
    border: 2px solid blue;
    cursor: pointer;
    font-size: .5;
     &:hover{
        background-color: white;
        color: ${props.theme.palette.secondary}
     }
    `

    return(<StyledButton onClick={props.onClick}>{props.children}</StyledButton>)
}

export default withTheme(Button);