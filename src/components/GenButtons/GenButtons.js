import React from 'react';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import ChangeGenButtons from '../UI/ChangeGenButtons/ChangeGenButtons';
import * as actionTypes from '../../store/actions/actionTypes';

const GenButtons = props => {
    const StyledGens = styled.header`
    width: 100%;
    height: 20%;
    font-family: sans-serif;
    color: white;
    /* box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1); */
    position:relative;
    p{
        margin: 0;
        padding: 0;
        
    }
    @media screen and (max-width: 768px){
        h4{
            font-size: 1vw;
        }
    }
    `


    return (
        <StyledGens>
            <p>Gen</p>
            <ChangeGenButtons currentGen={props.currentGen} genClick={props.genClick} />
            
        </StyledGens>)
}

const mapStateToProps = state => ({
    currentGen: state.selectedGen
})
const mapDispatchToProps = (dispatch) => ({
    genClick: (gen) => dispatch({ type: actionTypes.CHANGE_GEN, selectedGen: gen }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(GenButtons));