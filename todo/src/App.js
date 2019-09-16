import React, { Component, Fragment } from 'react';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handle = this.handle.bind(this);
    }

    render () {
        return (
            <Fragment>
                <div className={this.state.show? 'show': 'hide'}>App</div>
                <button onClick={this.handle}>click</button>
            </Fragment>
            
        )
    }
    handle() {
        this.setState(() => ({
            show: !this.state.show
        }))
    }
}

export default App;
