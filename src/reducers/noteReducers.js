import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  GET_NOTE,
  GET_NOTES
} from "../actions/types";

const initialState = {
  notes: [],
  note: {}
};

const noteReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.newData.id
            ? (note = action.payload.newData)
            : note
        )
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case GET_NOTE:
      return {
        ...state,
        note: state.notes.filter(note => note.id === action.payload)[0]
      };
    case GET_NOTES:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default noteReducers;
