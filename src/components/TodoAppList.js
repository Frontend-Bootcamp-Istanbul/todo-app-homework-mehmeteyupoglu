import React from 'react';
import TodoAppListItem from "./TodoAppListItem";
import {connect} from "react-redux";

const TodoAppList = ({todos}) => {
    return (
        <div >
            <h1 >
            {
                todos.map((todo) => {
                    return <TodoAppListItem  {...todo} />
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

const listStyled = {
    color: 'white', 
    border: '3px solid white', 
    borderRadius: '3px', 

}

export default connect(mapStateToProps)(TodoAppList);