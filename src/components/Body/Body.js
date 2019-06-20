import React from 'react'
import styled from 'styled-components';

const Body = props => {
    const { theme } = props;
    const BodyContainer = styled.div`
        height: 100%;
        width: 50%;
        margin: 0 auto;
        border: 5px solid black;
    `
    const BodyFrame = styled.div`
        height: 100%;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.palette.white};
    `    
    const BodyInner = styled.div`
        height: 90%;
        width: 90%;
        background-color: ${theme.palette.black};
    `
    return (
        <BodyContainer>

            <BodyFrame>
                <BodyInner>
                    {props.children}
                </BodyInner>
            </BodyFrame>

        </BodyContainer>
    )
}

export default Body;