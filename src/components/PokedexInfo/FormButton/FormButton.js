import React from 'react';
import styled, { withTheme } from 'styled-components';

const FormButton = props => {
    
    const FormButton = styled.button`
        margin: 4px;
        flex: 1;
        background-color: ${props.theme.palette.secondary};
        color: white;
        border: none;
        text-transform: capitalize;

        transition: 100ms ease-in;
        &:hover{
            background-color: blue;
            cursor: pointer;
        }
    `
    /*
    TODO: add  UsUm models*/
    
    return !props.children.includes("totem") ? <FormButton onClick={() => props.onClick(props.name)}>{props.children}</FormButton> : null;
}

export default withTheme(FormButton)