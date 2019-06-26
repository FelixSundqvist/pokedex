import React from 'react'

const Loading = () => 
    <div style={
        {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%", 
            height: "100%", 
            zIndex: 9999,
            color: "white"
        }}>

            <h1>LOADING</h1>
    
    </div>

export default Loading;