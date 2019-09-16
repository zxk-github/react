const defaultState = {
    value: '123',
    list: [1, 2]
}

export default (state = defaultState, action) => {
    console.log(state, action);
    if(action.type === 'input_change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.value = action.value;
        return newState;
    }
    
    if(action.type === 'add_list') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.value);
        newState.value = '';
        return newState;
    }

    return state;
}