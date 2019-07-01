import React from 'react';
import styled from 'styled-components';
import lensIcon from '../../../assets/pokedex-lens.svg';

const PokedexScanner = () => {
    const Wrapper = styled.div`
        width: 100%;
        height: 20%;
        position: relative;
    `
    const PokeScanner = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url(${lensIcon});
        background-size: contain;
        height: 4vw;
        width: 4vw;
    `
    return (<Wrapper><PokeScanner /></Wrapper>)
}

export default PokedexScanner;