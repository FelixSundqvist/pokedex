import React from 'react'
import styled from 'styled-components';

const EggGroup = ({ eggGroups }) => {
    const Wrapper = styled.div`
        display: flex;
        border: 2px solid white;
        justify-content: center;
    `
    const StyledEggGroup = styled.div`
        padding: 16px;
        margin: 8px;
        border: 2px solid white;
    `

    return <Wrapper>
        {eggGroups.map(cur => <StyledEggGroup key={cur.name}>{cur.name}</StyledEggGroup>)}
    </Wrapper>
}

export default EggGroup;