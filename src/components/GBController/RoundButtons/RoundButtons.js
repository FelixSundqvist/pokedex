import React from 'react';
import styled from 'styled-components';

const RoundButtons = ({ theme }) => {
    const RoundButtonContainer = styled.div `
        position: absolute;
        top: 20%;
        right: 5%;
        transform: translate(-50%, -50%);

        height: 80px;
        width: 150px;
        @media screen and (max-width: 500px){
            height: 50px;
            width: 120px;
        }
        display: flex;
        justify-content: space-around;
        align-items: center;
        transform: rotate(-35deg);
    `
    const Button = styled.div`
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: ${theme.palette.black};
        color: #333;
        padding: 10px;
        &:hover{
            cursor: pointer;
        }
        @media screen and (max-width: 500px){
            height: 30px;
            width: 30px;
        }
        
    `
    return(
        <RoundButtonContainer>
            <Button>B</Button>
            <Button>A</Button>
        </RoundButtonContainer>
    )
}

export default RoundButtons