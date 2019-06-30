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
    if(props.imageLink === "undefined"){
        return <StyledImage name={props.imageLink} />
    }else{
        return <p>No image</p>
    }
    
}

export default InfoImage;