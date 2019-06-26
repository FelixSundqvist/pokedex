import React from 'react'
import styled from 'styled-components';

const StyledDexEntry = styled.div`
padding: 16px;
background-color: white;
color: black;

font-family: sans-serif;`

const DexEntry = props => <StyledDexEntry>{props.children}</StyledDexEntry>

export default DexEntry;