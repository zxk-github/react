import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';


class TodoList extends Component {
    render() {
        return (
            <Fragment>
                 <div>
                    <Input placeholder="todolist" />
                    <Button type="primary">Button</Button>
                 </div>
            </Fragment>
        )
    }
}

export default TodoList;