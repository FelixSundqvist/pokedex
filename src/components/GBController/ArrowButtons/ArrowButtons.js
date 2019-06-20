import React from 'react';
import styled from 'styled-components';
const ArrowButtons = ({ theme }) => {
    
    const ArrowContainer = styled.div`
        position: absolute;
        top: 10%;
        left: 0%;

        margin-left: 20px;
        padding: 20px;
        width: 100px;
        height: 100px;
        @media screen and (max-width: 500px){
            height: 50px;
            width: 50px;
        }
    `

    const ButtonBlock = styled.div`
        position: absolute;
        transform: translate(-50%, -50%);
        background-color: ${theme.palette.black};
    `

    const ButtonArrow = styled.span`
        position: absolute;
        width: 0;
        height: 0;
        transform: translate(-50%, -50%);
        &:hover{
            cursor: pointer;
        }
    `
    const buttonSize = '35%';
    
    const verticalArrow = { top: '50%', left: '50%', height: "100%", width: buttonSize};
    const horizontalArrow = { top: '50%', right: '-50%', width: "100%", height: buttonSize};


    const buttonArrowSize = '10px ';
    const buttonArrowMargin = '10%';

    const buttonArrowTransparent = buttonArrowSize +'solid transparent';
    const buttonArrowColor = buttonArrowSize + 'solid #333';

    const buttonArrowUp = { 
        left: '50%',
        top: buttonArrowMargin,
        borderLeft: buttonArrowTransparent,
        borderRight: buttonArrowTransparent,
        borderBottom: buttonArrowColor,
    }
    const buttonArrowDown = {
        left: '50%',
        bottom: '0%',
        borderLeft: buttonArrowTransparent,
        borderRight: buttonArrowTransparent,
        borderTop: buttonArrowColor,
    }
    const buttonArrowLeft = {
        left: '5%',
        bottom: '0%',
        borderBottom: buttonArrowTransparent,
        borderLeft: buttonArrowTransparent,
        borderRight: buttonArrowColor,
        borderTop: buttonArrowTransparent,
    }
    const buttonArrowRight = {
        right: '-15%',
        bottom: '0%',
        borderBottom: buttonArrowTransparent,
        borderLeft: buttonArrowColor,
        borderRight: buttonArrowTransparent,
        borderTop: buttonArrowTransparent,
    }
    
    return (<ArrowContainer>
        <ButtonBlock style={verticalArrow}>

            <ButtonArrow onClick={() => console.log("click")} style={buttonArrowUp} /> 
            <ButtonArrow onClick={() => console.log("click")} style={buttonArrowDown} />   
            
        </ButtonBlock> 
        <ButtonBlock style={horizontalArrow}>

            <ButtonArrow onClick={() => console.log("click")} style={buttonArrowLeft} /> 
            <ButtonArrow onClick={() => console.log("click")} style={buttonArrowRight} /> 

        </ButtonBlock> 
    </ArrowContainer>) 
}

export default ArrowButtons;