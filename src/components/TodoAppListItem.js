import React from 'react';
import {connect} from "react-redux";
import {toggleTodo, deleteTodo} from "../redux/actions";



const TodoAppListItem = ({content, id, completed, toggleTodo, deleteTodo}) => {
    return (
        <div>
            <div style={{
            textDecoration: completed ? "line-through" : "initial", 
            color: 'white', 
            border: '1px solid white', 
            borderRadius: '2px', 
            padding: '3px 10px', 
            fontWeight: '200',
            fontSize: '20px', 
            boxShadow: '1.5px 2px 2px 1px #d9c1e0', 
            margin: '3px',  
            display: 'flex', 

            
        }} onClick={() => toggleTodo(id)}>
            {content} 
            
        </div>

        <button onClick={() => deleteTodo(id)}>Delete</button>

        </div>
        
    );
};

const mapDispatchToProps = {
    toggleTodo,
    deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);