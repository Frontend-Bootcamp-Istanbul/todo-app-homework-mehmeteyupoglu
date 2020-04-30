import React from 'react';


const TodoAppTitle = () => {
    return (
        <div style={titleStyled}>
            <h1>TODOS</h1>
        </div>
    );
};

const titleStyled = {
    display: 'flex', 
    justifyContent: 'center', 
    margin: '0 0 5px auto',  
    color: 'white', 
    fontWeight: 'bold', 
    textAlign : 'center', 
    fontSize : '25px', 
    border: '3px solid white', 
    borderRadius: '3px', 
}

export default TodoAppTitle;