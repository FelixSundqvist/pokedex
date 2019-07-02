import React from 'react'
import styled from 'styled-components';

const EggGroup = (props) => {

    return <div key="egg">
    {props.children}
    </div>
}

export default EggGroup;