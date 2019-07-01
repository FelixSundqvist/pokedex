import React from 'react'
import styled from 'styled-components';

const Card = ({name, id, onClick, selected, children}) => {
    const StyledCard = styled.div`
        height: 100px;
        width: 100px;
        background-color: white;
        margin: 10px;
        text-transform: capitalize;
        &:hover{
            cursor: pointer;
        }
        font-size: .5rem;
        opacity: ${selected === name ? 1 : 0.5};
        border: ${selected === name ? "2px solid red ": null};
        &:hover{
            opacity: 0.8;
        }
        transition: opacity 100ms ease;
    `
    const Image = styled.div`
        margin:0 auto;
        height: 60%;
        width: 60%;
        background-image: ${`url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
    `

    return (
    <StyledCard onClick={() => onClick(name)} >
        <Image/>
        <p>{name}</p>
        <p>{children}</p>
    </StyledCard>)
}
export default Card;