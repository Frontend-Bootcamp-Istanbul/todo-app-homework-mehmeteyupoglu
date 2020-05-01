import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";
import TodoAppDelete from "./TodoAppDelete"


const TodoAppListItem = ({content, id, completed, toggleTodo, props}) => {
    return (
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
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);