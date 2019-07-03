import React from 'react'
import styled from 'styled-components';

const Stats = ({stats}) => {
    const Wrapper = styled.div`
        border: 2px solid white;
    `
    const checkColor = (str) => {
        switch(str){
            case ("hp"):
                return '#FF5959'
            case ("attack"):
                return '#F5AC78'
            case ("defense"):
                return '#FAE078'
            case("special-attack"):
                return '#9DB7F5'
            case("special-defense"):
                return '#A7DB8D'
            case("speed"):
                return '#FA92B2'
            default: 
                return 'white'
        }
    }
    const statElements = stats.map((current, id) => {

        return( 
        <div key={"stat" + id}>
            <p style={{color: checkColor(current.stat.name)}}>{current.stat.name}</p>
            <p>{ current.base_stat }</p>
        </div>)
        }
    )

    return <Wrapper>{statElements}</Wrapper>;

}

export default Stats;

