import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import errorImage from '../../../assets/error.gif';
import errorImage2 from '../../../assets/error2.gif';
const ErrorMessage = styled.div`
    color: red;
    height: 100%;
    width: 100%;
    img{
        display: block;
        margin: 0 auto;
    }
`
const ErrorHandler = props => {
    const [ message, setMessage ] = useState(null)
    useEffect(() => {
        const timer = setTimeout(() => 
        setMessage(<ErrorMessage><img src={props.error1 ? errorImage : errorImage2} alt="error" /> ERROR</ErrorMessage>), 2000);
        return () => clearTimeout(timer)
    }, [props.error1])

    
   

    return(<>{message}</>)
}

export default ErrorHandler;