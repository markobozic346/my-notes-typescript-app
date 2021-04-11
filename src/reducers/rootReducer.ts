
export interface StateType {
    notes: {}[],
}

interface ActionType {
    type: string,
    payload: string | number,
}
const initialState = {
    notes: [{},{}]
}
export const rootReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD_NOTE":
            return state
            break;
        case "REMOVE_NOTE": 
        return state
            
            break;
        case "UPDATE_NOTE":
            return state
            break;
        default:
            return state
            break;
    }
}