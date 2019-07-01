import React from 'react';
import styled from 'styled-components';
import loadinImage from '../../../assets/loading.gif';
const Loading = () => {
    const LoadingWrapper = styled.div`
        width: 100%;
        height: 100%;
        color: white;
        span:nth-child(1){
            animation: loading 300ms linear 100ms infinite;
        }
        span:nth-child(2){
            animation: loading 300ms linear 150ms infinite;
        }
        span:nth-child(3){
            animation: loading 300ms linear 200ms infinite;
        }   

        font-size: 2vw;

        @keyframes loading {
            from{
                opacity: 1;
            }
            to{
                opacity: 0;
            }
        }

        img{
            width: 30%;
        }
    `
    
    return <LoadingWrapper>
        <img src={loadinImage} alt="loading" />
        <h1>LOADING<span>.</span><span>.</span><span>.</span></h1>
    </LoadingWrapper>
}

export default Loading;