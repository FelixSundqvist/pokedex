import React from 'react';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import PokedexScanner from '../PokedexScanner/PokedexScanner';
import ChangeGenButtons from '../ChangeGenButtons/ChangeGenButtons';
import * as actionTypes from '../../store/actions/actionTypes';

const Header = props => {
    const { theme } = props;
    const StyledHeader = styled.header`
    margin: 0;
    width: 100%;
    background-color: ${theme.palette.black};
    font-family: sans-serif;
    color: white;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
    position: relative;
    h1{
        line-height: 20vh;
        margin: 0;
        font-size: 6vw;
        vertical-align: middle;
    }`


    return (
        <StyledHeader>
            <h1>Pokedex</h1>
            <ChangeGenButtons genClick={props.genClick} />
            <PokedexScanner />
            
        </StyledHeader>)
}

const mapDispatchToProps = (dispatch) => ({
    genClick: (gen) => dispatch({ type: actionTypes.CHANGE_GEN, selectedGen: gen }),
})

export default connect(null, mapDispatchToProps)(withTheme(Header));