import React from 'react';
import styled from 'styled-components';
import lensIcon from '../../assets/pokedex-lens.svg';

const PokedexScanner = () => {
    const PokeScanner = styled.div`
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(50%, 50%);
        background-image: url(${lensIcon});
        background-size: contain;
        height: 8vw;
        width: 8vw;
    `
    return (<PokeScanner />)
}

export default PokedexScanner;