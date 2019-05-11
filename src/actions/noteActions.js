import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, GET_NOTE, GET_NOTES } from "./types";

export const addNote = noteData => {
  return {
    type: ADD_NOTE,
    payload: noteData
  };
};

export const editNote = (newData, id) => {
  return {
    type: EDIT_NOTE,
    payload: {
      newData,
      id
    }
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};
export const getNote = id => {
  return {
    type: GET_NOTE,
    payload: id
  };
};
export const getNotes = () => {
  return {
    type: GET_NOTES
  };
};
