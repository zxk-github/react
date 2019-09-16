import React, { Component, Fragment } from 'react'

class TodoListUI extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" 
                    onChange={this.handle} 
                    value={this.props.value} />
                    <button onClick={this.props.addList}>点击</button>
                </div>
                <ul>
                    { this.createItem() }
                </ul>
            </Fragment>
        )
    }
    createItem() {
        return this.state.list.map( (item, index) => {
            return (
                // <li  key={index} onClick={this.deleteItem.bind(this, index)}>{item}</li>
                <TodoItem2 content={item} index={index} deleteItem={this.deleteItem} key={index} />
            )
        })
    }
}

export default TodoListUI;
