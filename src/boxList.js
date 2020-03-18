import React, { Component } from 'react'
import JSON from './boxes.json';
import Box from './box';
import NewBoxForm from './newBoxForm'

class BoxList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boxes: JSON
        }
        this.Create =  this.Create.bind(this);
        this.remove = this.remove.bind(this);
    }
    Create (newBox){
        this.setState({
            boxes:[...this.state.boxes, newBox]
        });
    }
    remove (id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    render() {
        const boxes = this.state.boxes.map(box => {
            return(
            <Box 
            key = {box.id}
            id = {box.id}
            height = {box.height}
            width = {box.width}
            color = {box.color}
            removeBox = {() => this.remove(box.id)}
            />
            );
        });
        return (
            <div>
                <NewBoxForm createBox = {this.Create}/>
                {boxes}
            </div>
        );
    }
}

export default BoxList;