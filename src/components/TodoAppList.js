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

export default connect(mapStateToProps)(TodoAppList);