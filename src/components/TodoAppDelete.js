import React from 'react';
import {connect} from "react-redux";
import {deleteTodo} from "../redux/actions";
import { Button } from 'reactstrap';

const TodoAppDelete = (props) => {

    const {id, deleteTodo} = props
    
    return (
        <Button type='submit' 
        onclick={() => {
        
            deleteTodo(id)
            console.log(id)
        
        }} 
        style={styledButton} 
        color="warning">
        X
        </Button>
    );
};

const styledButton = {
    display: 'flex', 
    justifyContent: 'flex-end', 
    backgroundColor: '#e0201d', 
    color: 'white', 
    fontFamily: 'sans-serif', 
    fontWeight: 'bold', 
    fontSize: '15px', 
    borderRadius: '4px', 
    border: '2px solid #e0201d', 
    marginLeft: '200px'
    
}

const mapDispatchToProps = {
    deleteTodo : deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoAppDelete);