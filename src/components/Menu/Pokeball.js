import styled from 'styled-components'
export const Pokeball = styled.div`
position: relative;
box-shadow: 2px 2px 3px #888;
height: 30px;
width: 30px;
border: 2px solid black;
margin: 8px;
border-radius: 50%;
background-position: 50% 50%;
background-size: contain;
background-repeat: no-repeat;
background-color: white;
&:hover{
    cursor: pointer;
    transform: scale(1.01);
}
`
export const PokeballItemWrapper = styled.div`
width: 80%;
margin: 16px auto;
box-shadow: 2px 2px 4px 2px #ccc;
display: flex;
flex-direction: column;
justify-content: center;

div:nth-child(even){
    background-color: #eee;
    padding: 8px;
}
`