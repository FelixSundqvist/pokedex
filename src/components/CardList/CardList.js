import React, { useMemo } from 'react';
import Card from './Card/Card';
import { getIDFromURL } from '../../utility';

const CardList = ({ items, onClick, selected }) => {
    const cards = useMemo(() =>         
    <>
        {
            items.map(current => <Card 
                    onClick={onClick}
                    selected={selected}
                    id={getIDFromURL(current.url)}
                    key={current.name} 
                    name={current.name}/>)
        }
    </>, 
    [items, onClick, selected])

    return cards
}
export default CardList;