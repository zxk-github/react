import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.inputValue} />
                    <button>click</button>
                </div>
                <ul>
                    <li>123</li>
                </ul>
            </Fragment>
        )
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default TodoList;