import React, { useMemo } from 'react';
import Card from './Card/Card';

const CardList = ({ items, onClick, selected }) => {
    const cards = useMemo(() =>         
    <>
        {
            items.map(current => <Card 
                    onClick={onClick}
                    selected={selected}
                    id={current.url.match(/\d{1,3}\/$/)[0].split("/")[0]}
                    key={current.name} 
                    name={current.name}/>)
        }
    </>, 
    [items, onClick, selected])

    return cards
}
export default CardList;