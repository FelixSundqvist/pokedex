import React from 'react';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import PokedexScanner from '../UI/PokedexScanner/PokedexScanner';
import ChangeGenButtons from '../UI/ChangeGenButtons/ChangeGenButtons';
import * as actionTypes from '../../store/actions/actionTypes';

const GenButtons = props => {
    const StyledGens = styled.header`
    margin: 0;
    width: 100%;
    font-family: sans-serif;
    color: white;
    /* box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1); */
    position:relative;
    h1{
        line-height: 10vh;
        margin: 0;
        font-size: 4vw;
        vertical-align: middle;
    }`


    return (
        <StyledGens>
            <div>
                <h3>Generation: </h3>
                <ChangeGenButtons currentGen={props.currentGen} genClick={props.genClick} />
            </div>
            <PokedexScanner />
            
        </StyledGens>)
}

const mapStateToProps = state => ({
    currentGen: state.selectedGen
})
const mapDispatchToProps = (dispatch) => ({
    genClick: (gen) => dispatch({ type: actionTypes.CHANGE_GEN, selectedGen: gen }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(GenButtons));