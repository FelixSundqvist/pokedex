import React from 'react';
import styled from 'styled-components';

const Backdrop = props => 
{
    const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;`

    return <StyledBackdrop onClick = {props.onClick}>{props.children}</StyledBackdrop>
}

export default Backdrop