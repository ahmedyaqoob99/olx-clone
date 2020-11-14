const INITIAL_STATE = {
    user: [],
    current_user: {
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUSER":
            return ({
                ...state,
                current_user: action.payload
            })
    }
    return state;
}