import React from 'react'
import styled from 'styled-components';
import ArrowButtons from './ArrowButtons/ArrowButtons';
import RoundButtons from './RoundButtons/RoundButtons';

const GBController = ({ theme }) => {

    const StyledGBController = styled.div`
        position: relative;
        background-color: ${theme.palette.primary};
        min-height: 30%;
        width: 100%;
        margin: 0 auto;
        padding: 10px;
    `
    return(
        <StyledGBController>
            <ArrowButtons theme={theme} />
            <RoundButtons theme={theme} />
        </StyledGBController>
    )
}

export default GBController;