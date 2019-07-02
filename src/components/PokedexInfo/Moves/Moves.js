import React from 'react';
import styled, { withTheme } from 'styled-components';
import Title from '../Title/Title';
const MoveListItems = React.lazy(() => import('./MoveListItems')); 

const Moves = ({ moves, onClick, show }) => {

    const MoveListWrapper = styled.div`

    `    
    const MoveListUL = styled.ul`
        margin: 0;
        padding: 0;
        list-style-type: none;
        border: 2px solid white;
        display: ${show ? "block" : "none"};
        li {
            padding: 16px;
        }

        li:nth-child(even) {
            background-color: white;
            color: black;
        }
        `
    let MoveList= show ? <MoveListUL><MoveListItems moves={moves}/></MoveListUL> : null;

    return(<MoveListWrapper>
        <Title onClick={onClick} show={show}>Moves</Title>
        { MoveList }
    </MoveListWrapper>)
}

export default withTheme(Moves);