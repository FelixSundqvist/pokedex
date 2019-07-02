import React from 'react'
import styled from 'styled-components';
import FormButton from '../FormButton/FormButton';

const InfoImage = props => {
    const StyledImage = styled.div`
        height: 150px;
        background-image: ${`url(${props.imageLink})`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
        margin: 16px 0;
    `
    const Buttons = styled.div`
        float: right;
        color: black;
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border: 2px solid white;
        color: white;
    `

    const formes = props.varieties && props.varieties.length > 1 
    ?   (<Buttons>
        {
        props.varieties.map(form => 
            <FormButton 
                key={form.pokemon.name}
                onClick={props.evolutionClick}
                name={form.pokemon.name}
                >
                {form.pokemon.name}
            </FormButton>)
        }
        </Buttons>)
    :  null;
    return (<StyledImage name={props.imageLink}>{formes}</StyledImage>)

}

export default InfoImage;