import React from 'react'
import styled from 'styled-components';


const Card = props => {
    const StyledCard = styled.div`
        height: 100px;
        width: 100px;
        background-color: white;
        margin: 10px;
        text-transform: capitalize;

    `
    const Image = styled.div`
        margin:0 auto;
        height: 60%;
        width: 60%;
        background-image: ${`url(http://felixsundqvist.org/pokemon/${props.name}.gif)`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
    `

    return (
    <StyledCard>
        <Image />
        <p>{props.name}</p>
    </StyledCard>)
}

export default Card;