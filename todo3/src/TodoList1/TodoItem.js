import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        console.log(222)
        const {content} = this.props; 
        return (
            <div onClick={this.deleteItem}>{content}</div>
        )
    }

    deleteItem() {
        const { deleteItem, index} = this.props;
        deleteItem(index)
    }
}



export default TodoItem;
