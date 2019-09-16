import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div onClick={this.deleteItem.bind(this)}>{this.props.content}</div>
        )
    }
    deleteItem() {
        console.log(this.props.index)
        this.props.delete(this.props.index)
    }
}

export default TodoItem;


