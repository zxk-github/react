import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {
    constructor(props) {    
        super(props)
        this.state = {
            inputValue: 'qwe',
            list: ['1231']
        }
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                    <button onClick={this.handleClick.bind(this)}>click</button>
                </div>
                <ul ref={(list) => this.list = list}>
                    {this.createItem()}
                </ul>
            </div>
        )
    }
    createItem() {
        return  this.state.list.map((item, index) => {
                return (
                    <li key={index}>
                        <TodoItem content={item} index={index} deleteItem={this.delete}></TodoItem>
                    </li>
                )
            })
        }
    

    handleChange(e) {
        const val = e.target.value;
        this.setState(() => ({
            inputValue: val
        }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleClick() {
        
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ""
        // })
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        console.log(this.list.querySelectorAll('li').length)
    }

    delete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState(() => ({
            list
        }))
    }



}

export default TodoList;
