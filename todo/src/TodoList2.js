import React, { Component } from 'react';
import TodoItem2 from './TodoItem2';
import store from './store';
import TodoListUI from './todo/todoListUi';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     value: '',
        //     list: [1,2]
        // };

        this.state = store.getState();
        this.handle = this.handle.bind(this);
        this.addList = this.addList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange( ) {
        console.log('store 发生了变化')
        this.setState(() => {
            return store.getState();
        })
    }
    render() {
        return <TodoListUI 
                value={this.state.inputValue}
                addList={this.addList}
                createItem={this.createItem}
            />
    }

    handle(e) {
        // this.setState({
        //     value: e.target.value
        // })
        // const value = e.target.value;
        
        // this.setState( () => ({
        //     value
        // }))

        const action = {
            type: 'input_change',
            value: e.target.value
        }
        store.dispatch(action)
    }

    createItem() {
        return this.state.list.map( (item, index) => {
            return (
                // <li  key={index} onClick={this.deleteItem.bind(this, index)}>{item}</li>
                <TodoItem2 content={item} index={index} deleteItem={this.deleteItem} key={index} />
            )
        })
    }

    addList() {
        // const list = [...this.state.list, this.state.value];
        // this.setState({
        //     list,
        //     value: ''
        // })
        
        // this.setState((prevState) => ({
        //     list: [...prevState.list, prevState.value],
        //     value: ''
        // }))

        const action  = {
            type: 'add_list'
        }
        store.dispatch(action);

    }

    deleteItem(index) {
        const list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list
        })
    }

}



export default TodoList;

