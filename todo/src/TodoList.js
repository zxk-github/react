import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '1231',
      list: ['xuexi', 'wan']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">名字</label>
          <input type="text" id="inputArea" className="input" value={this.state.inputValue} onChange={this.handle.bind(this)}/> 
          <button onClick={this.handleClick.bind(this)}>click</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div>
                  <TodoItem content={item} index={index} delete={this.delete.bind(this)}/>
                  {/*  
                    <li key={index} 
                    onClick={this.delete.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}>
                    </li>
                  */}
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  handle(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue],
      
    })
  }
  delete(index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    })
  }
}

export default TodoList;