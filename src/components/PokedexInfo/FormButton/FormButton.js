import React from 'react';
import styled, { withTheme } from 'styled-components';

const FormButton = props => {
    
    const FormButton = styled.button`
        margin: 16px;
        padding: 16px;
        background-color: ${props.theme.palette.secondary};
        border-radius: 16px;
        color: white;
        border: none;
        text-transform: capitalize;
        box-shadow: 3px 0px 12px #666;
        transition: 100ms ease-in;
        &:hover{
            background-color: blue;
            cursor: pointer;
        }
    `
    /*TODO: add check for totem pokemon
    TODO: add  UsUm models*/
    
    return !props.children.includes("totem") ? <FormButton onClick={() => props.onClick(props.name)}>{props.children}</FormButton> : null;
}

export default withTheme(FormButton)