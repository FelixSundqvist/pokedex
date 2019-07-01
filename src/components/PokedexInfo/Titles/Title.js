import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled.h3`
    border: 2px solid white;

    &:hover {
        cursor: pointer;
    }

`

const Title = props => <StyledTitle onClick={props.onClick}>{props.children}</StyledTitle>

export default Title;