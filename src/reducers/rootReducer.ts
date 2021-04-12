

export interface StateType {
    notes: {id: number, title: string, tags: string[], description: string}[],
}

interface ActionType {
    type: string,
    payload: string | number,
}
const initialState = {
    notes: [{
        id: 1,
        title: 'this is first note',
        tags: ['react','interview questions'],
        description: 'this is first note description',
    },
    {
        id: 2,
        title: 'this is second note',
        tags: ['work','things to do'],
        description: 'this is something else',
    }
]
}
export const rootReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD_NOTE":
            return state
            
        case "REMOVE_NOTE": 
        return state
            
           
        case "UPDATE_NOTE":
            return state
            
        default:
            return state
            
    }
}