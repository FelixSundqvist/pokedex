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
    
    const StyledHiddenAbilities = styled.div`
        padding: 16px;
        background-color: ${theme.palette.secondary};
        opacity: 0.3;
        margin: 8px;
    `

    const allAbilities = abilities
        .map(cur => !cur.is_hidden 
            ? <StyledAbilities key={cur.ability.name}>{cur.ability.name}</StyledAbilities> 
            :<React.Fragment key={cur.ability.name}>
                <p>Hidden: </p>
                <StyledHiddenAbilities>{cur.ability.name}</StyledHiddenAbilities>
            </React.Fragment>)
        .reverse()

    return (
        <>
            <h3>Abilities</h3>
            <AbilityWrapper>{allAbilities}</AbilityWrapper>
        </>
    )
}

export default withTheme(Abilities);