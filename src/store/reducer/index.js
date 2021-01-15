const INITIAL_STATE = {
    current_user: {}    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUSER":
            return { ...state, current_user: action.payload }
        default:
            return state;
    }
}