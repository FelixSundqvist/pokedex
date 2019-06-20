import React from 'react'
import styled from 'styled-components';
import Body from '../../components/Body/Body';

const Pokedex = props => {
    const { theme } = props;

    const StyledPokedex = styled.div`
        height: 100vh;
        width: 100vw;
        background-color: ${ theme.palette.primaryDark }
    `    
    return <StyledPokedex><Body theme={theme}></Body></StyledPokedex>
}

export default Pokedex;