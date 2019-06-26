import React from 'react'
import styled from 'styled-components';

const InfoImage = props => {
    const StyledImage = styled.div`
        height: 100px;
        background-image: ${`url(${props.imageLink})`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
    `

    return <StyledImage name={props.imageLink} />
}

export default InfoImage;