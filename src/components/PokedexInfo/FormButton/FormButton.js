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
    `
    return <FormButton onClick={props.onClick}>{props.children}</FormButton>
}

export default withTheme(FormButton)