// import React from 'react';
// import ReactDOM from 'react-dom';
// import TodoList2 from './TodoList2';
// // import App from './App';

// // ReactDOM.render(<TodoList />, document.getElementById('root'));

// // import React from 'react';
// // import ReactDOM from 'react-dom';

// ReactDOM.render(<TodoList2 />, document.getElementById('root'))


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoList from './todo2/TodoList';
import store from './store';
const App = (
    <Provider store={ store }>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

