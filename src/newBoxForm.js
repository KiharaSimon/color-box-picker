import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewBoxForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: "",
            width: "",
            color:""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

     }
     changeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    submitHandler (event){
        event.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox);
        this.setState({
            height: "",
            width: "",
            color:""
        })
    }

    render() {
        return (
            <form  onSubmit = {this.submitHandler}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                    type="text"
                    name="height"
                    value={this.state.height}
                    onChange={this.changeHandler}
                    id="height"
                    />

                </div>
                <div>
                    <label htmlFor="width">ridth</label>
                    <input 
                    type="text"
                    name="width"
                    value={this.state.width}
                    onChange={this.changeHandler}
                    id="width"
                    />

                </div>
                <div>
                    <label htmlFor="color">color</label>
                    <input 
                    type="text"
                    name="color"
                    value={this.state.color}
                    onChange={this.changeHandler}
                    id="color"
                    />

                </div>
                <button>Add Box</button>
            </form>
        )
    }
}

export default NewBoxForm;