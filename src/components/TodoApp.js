import React from 'react';
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";

function TodoApp (){

        return (
            <div >
                <TodoAppHeader/>
                <TodoAppList />
            </div>
        );
    }

export default TodoApp