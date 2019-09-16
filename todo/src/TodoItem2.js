import React, { Component } from 'react';

class TodoItem2 extends Component {
    constructor(props) {
        super(props);
        this.deleteClick = this.deleteClick.bind(this);
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.deleteClick}>
                {content}
            </div>
        )
    }
    deleteClick() {
        const { deleteItem, index } = this.props; 
        deleteItem(index);
    }

}

export default TodoItem2;