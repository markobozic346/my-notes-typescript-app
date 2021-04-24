import Notes from "../components/Note/Note";

let initialID = 3;

export interface StateType {
  notes: { id: number; title: string; tags: string[]; description: string }[];
}

interface ActionType {
  type: string;
  payload: {
    id?: number;
    title?: string;
    tags?: string[];
    description?: string;
  };
}
const initialState = {
  notes: [
    {
      id: 1,
      title: "this is first note",
      tags: ["react", "interview questions"],
      description: "this is first note description",
    },
    {
      id: 2,
      title: "this is second note",
      tags: ["work", "things to do"],
      description: "this is something else",
    },
  ],
};
export const noteReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: initialID++,
            title: action.payload.title,
            tags: action.payload.tags,
            description: action.payload.description,
          },
        ],
      };

    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case "UPDATE_NOTE":
      return state;

    default:
      return state;
  }
};
