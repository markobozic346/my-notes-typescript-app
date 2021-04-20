export interface SearchStateType {
  keywords: string;
  tags: string;
}

interface SearchActonType {
  type: string;
  payload: {
    keywords: string;
    tags: string;
  };
}
const initialState = {
  keywords: "",
  tags: "",
};
export const searchReducer = (
  state: SearchStateType = initialState,
  action: SearchActonType
) => {
  switch (action.type) {
    case "ADD_SEARCH_KEYWORDS":
      
      return {
        ...state,
        keywords: action.payload.keywords,
        tags: action.payload.tags,
      };

    default:
      return state;
  }
};
