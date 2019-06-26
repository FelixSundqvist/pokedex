import React from 'react'
import styled, { withTheme } from 'styled-components';

const Wrapper = ({ theme, children }) => {
    const StyledWrapper = styled.div`
    position: relative;
    min-height: 80vh;
    flex: 1;
    margin: 8px;
    background-color: ${theme.palette.primaryDark};
    border: .3vw solid ${theme.palette.black};
    box-shadow: 5px 10px 10px ${theme.palette.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`

    return <StyledWrapper>{children}</StyledWrapper>
}

export default withTheme(Wrapper)