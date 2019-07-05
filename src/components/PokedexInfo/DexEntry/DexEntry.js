import React from 'react'
import styled from 'styled-components';

const StyledDexEntry = styled.div`
    padding: 2vw;
    border: 2px solid white;
`
const DexEntry = props => <StyledDexEntry>{props.children}</StyledDexEntry>

export default DexEntry;