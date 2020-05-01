import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";
import { Button, Form, FormGroup, Input } from 'reactstrap';

class TodoAppAdd extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: ""
        }
    }

    render(){
        return (
            <div>
                <Form style = {formStyled}
                    inline onSubmit={(e) => {
                    /// formun default davranisi olan sayfa yenileme ve post etmeyi engelliyorum
                    e.preventDefault();
                    // statete tuttugum inputu son degerini aliyorum
                    const newContent = this.state.value;
                    this.props.addTodo(newContent);
                }}>

                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        style={inputStyled}
                        type="text"
                        placeholder="Todo Giriniz"
                        id="examplePassword"
                        value={this.state.value}
                        onChange={(e) => {
                            this.setState({
                                value: e.target.value
                            })
                        }}
                    />
                </FormGroup>      
                    <Button style={btnStyle} type="submit">+</Button>
                </Form>
            </div>
    
        );
    }
}

const formStyled = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
}
const mapDispatchToProps = {
    addTodo: addTodo
};

const btnStyle = {
    marginLeft: '5px', 
    height: '2rem', 
    width: '50px', 
    backgroundColor: '#c5b5c9', 
    border: '1px solid #8e54e9', 
    borderRadius: '3px', 
    color: 'white', 
    fontSize: '20px', 
    fontWeigth: 'bold'
}

const inputStyled = {
    height: '1.75rem', 
    width: '15rem', 
    border: '4px solid linear-gradient(to right, #4776e6, #8e54e9)', 
    borderRadius: '10px', 
}

export default connect(null, mapDispatchToProps)(TodoAppAdd);