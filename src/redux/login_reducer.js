const initState = {
    isLogin: false,
    formOpened: false,
}

const reducer = (state = initState, action) => {
    if(action.type === 'OPEN_FORM'){
        return {
            ...state,
            formOpened: true
        }
    }
    else if(action.type === 'CLOSE_FORM'){
        return {
            ...state,
            formOpened: false
        }
    }
    else if(action.type === 'LOGIN') {
        return {
            ...state,
            isLogin: true
        }
    }
    return state;   
}
export default reducer;