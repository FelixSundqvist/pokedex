import React from 'react';
import Card from './Card/Card';

const CardList = ({ items }) => (
    <>
        {
            items.map(current => 
                <Card 
                    key={current.name} 
                    name={current.name}/>)
        }
    </>);

export default CardList;