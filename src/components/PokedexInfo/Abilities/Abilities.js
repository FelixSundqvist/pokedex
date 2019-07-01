import React from 'react';
import styled, { withTheme } from 'styled-components';

const Abilities = ({ abilities, theme }) => {
    
    const AbilityWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const StyledAbilities = styled.div`
        padding: 16px;
        background-color: ${theme.palette.secondary};
        margin: 8px;
       
    `
    
    const allAbilities = (
    <React.Fragment key="abilities">
        {abilities.map(cur => <StyledAbilities key={cur.ability.name}>{cur.ability.name}</StyledAbilities>)} 
    </React.Fragment>)

    return (
        <>
            <h3>Abilities</h3>
            <AbilityWrapper>{allAbilities}</AbilityWrapper>
        </>
    )
}

export default withTheme(Abilities);