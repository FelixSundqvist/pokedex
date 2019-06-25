import React from 'react';
import styled from 'styled-components';

const Types = ({ type }) => {
    const StyledTypes = styled.span`
        padding: 8px;
        border: 2px solid black;
        border-radius: 1vw;
        width: 25px;
        height: 10px;
        margin: 8px;
        color: white;
        text-transform: uppercase;
        font-family: sans-serif;
    `
    let bgColor = "#BFBCB6";
    switch(type){
        case("bug"): 
            bgColor = "#9EAC24";
        break;
        case("dark"):
            bgColor = "#2A241F";
        break;
        case("dragon"):
            bgColor = "#6C5CBA";
        break;  
        case("electric"):
            bgColor = "#E19E1E";
        break;
        case("fairy"):
            bgColor = "#EDA7EF";
        break;
        case("fighting"):
            bgColor ="#603228";
        break;
        case("fire"):
            bgColor = "#CE340C";
        break;
        case("flying"):
            bgColor = "#6879CF";
        break;
        case("ghost"):
            bgColor = "#444364";
        break;
        case("grass"):
            bgColor = "#467127";
        break;
        case("ground"):
            bgColor = "#937D52";
        break;
        case("ice"):
            bgColor = "#72D6EF";
        break;
        case("normal"):
            bgColor = "#BFBCB6";
        break;
        case("poison"):
            bgColor = "#884D88";
        break;
        case("psychic"):
            bgColor = "#D84C7B";
        break;
        case("rock"):
            bgColor = "#998444";
        break;
        case("steel"):
            bgColor = "#827F8C";
        break;
        case("water"):
            bgColor = "#3C8FDC";
        break;
        default:
            bgColor = "white";
    }
    return(<StyledTypes style={{backgroundColor: bgColor}}>{type}</StyledTypes>)
}

export default Types;