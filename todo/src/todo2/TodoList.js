import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.props.inputValue} onChange={this.props.changeInputValue} />
                    <button>点击</button>
                </div>
                <ul>
                    <li>asdfsad</li>
                </ul>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


