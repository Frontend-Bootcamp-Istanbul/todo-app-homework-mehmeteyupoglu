import React from 'react';
import {connect} from "react-redux";
import {deleteTodo} from "../redux/actions";
import { Button } from 'reactstrap';

const TodoAppDelete = (props) => {

    
    return (


        <Button onclick={() => {props.deleteTodo(props.id)}} style={styledButton} color="warning">X</Button>
    );
};

const mapDispatchToProps = {
    deleteTodo : deleteTodo
}

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

export default connect(null, mapDispatchToProps)(TodoAppDelete);