import React from 'react';
import styled from 'styled-components';

const HeaderCircle = ({ theme }) => {

    const OuterFrame = styled.div`
        position: absolute;
        bottom: -50%;
        right: 0;
        transform: translate(-50%, -50%);
        
        width: 10vh;
        height: 10vh;
        border-radius: 50%;
        background-color: ${theme.palette.white};
    `
    const OuterCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: .2vw solid black;
    background-color: ${theme.palette.secondary}
    `
    const InnerCircle = styled.div`
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translate(-50%);
        width: 80%;
        height: 80%;
        border-radius: 50%;
        background-color: ${theme.palette.secondaryDark}
    `
    const InnerBump = styled.div`
        position: absolute;
        top: -10%;
        left: -20%;
        margin: 1vh;
        width: 40%;
        height: 40%;
        border-radius: 50%;
        background-color: ${theme.palette.secondary}
    `
    const InnerShine = styled.div`
        position: absolute;
        top: -50%;
        left: -50%;
        margin: 1.5vh;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background-color: white;
    `

    return (
    <OuterFrame>
        <OuterCircle>
            <InnerCircle>
                <InnerBump><InnerShine /></InnerBump>
            </InnerCircle> 
        </OuterCircle>
    </OuterFrame>)
}

export default HeaderCircle;