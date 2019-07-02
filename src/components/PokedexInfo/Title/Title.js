import React from 'react'
import styled from 'styled-components';
import arrowDown from '../../../assets/sort-down-solid.svg';
import minus from '../../../assets/minus-solid.svg';

const Title = props => {
    
    const StyledTitle = styled.h3`
        position: relative;
        border: 2px solid white;

        &:hover {
            cursor: pointer;
        }

    `
    const ArrowIcon = styled.div`
        display: block;
        position: absolute;
        top: -70%;
        right: 0;
        height: 100%;
        width: 5%;
        transform: translate(-50%, 50%);
        background-image: url(${arrowDown});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
    `
    const MinusIcon = styled.div`
        display: block;
        position: absolute;
        top: -50%;
        right: 0;
        height: 100%;
        width: 5%;
        transform: translate(-50%, 50%);
        background-image: url(${minus});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
    `
    
    return (
        <StyledTitle onClick={props.onClick}>
            {props.children}
            {!props.show ? <ArrowIcon /> : <MinusIcon />}
        </StyledTitle>)
}

export default Title;