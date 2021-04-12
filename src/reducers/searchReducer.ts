interface SearchStateType{
    keywords: String,
    tags: String[]
}


interface SearchActonType{
    type: String,
    payload: {
        keywords?: String,
        tags?: String[],
    }
}
const initialState = {
    keywords: '',
    tags: []
}
export const searchReducer = (state : SearchStateType = initialState, action: SearchActonType) => {
    switch (action.type) {
        case "ADD_KEYWORDS_SEARCH_QUERY":
            return state
            
        case "ADD_TAGS_SEARCH_QUERY": 
        return state
       
        default:
            return state
            
    }
}