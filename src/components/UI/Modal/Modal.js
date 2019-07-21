import React from 'react';
import styled, { withTheme } from 'styled-components';

const Modal = props => {
    const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(5%, 0%);
    width: 90%;
    height: 100%;
    border: 2px solid black;
    z-index: 999;
    background-color: white;
    font-family: sans-serif;
    overflow: scroll;
    text-transform: capitalize;
    display: ${props.show ? "block" : null};
    color: #000;
    h1 {
        background-color: ${props.theme.palette.primary};
        margin: 0;
        color: white;
    }`

    return <StyledModal>{props.children}</StyledModal>
}

export default withTheme(Modal);