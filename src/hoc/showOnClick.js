import React, { useState } from 'react';
import Title from '../components/PokedexInfo/Title/Title';

const showOnClick = Component => props => {
    const [show, setShow] = useState(false);
    const hidden = show ? <Component {...props} show={show} /> : null

    return (
    <div key={props.title}>
        <Title onClick={() => setShow(!show)} show={show}>{props.title}</Title>
        {hidden}
    </div>)
}

export default showOnClick