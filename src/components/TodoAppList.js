import React from 'react';
import TodoAppListItem from "./TodoAppListItem";
import {connect} from "react-redux";
import TodoAppDelete from "./TodoAppDelete"
import deleteTodo from "./TodoAppDelete"
const TodoAppList = ({todos, id, deleteTodo}) => {
    return (
        <div >
            <h1 >
            {
                todos.map((todo) => {
                    return (
                    <div>
                        <TodoAppListItem  {...todo} /> 
                        <TodoAppDelete deleteTodo={id}/>
                    </div>)
                   
                })
            }
            </h1>
            
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer
    }
}

export default connect(mapStateToProps)(TodoAppList);