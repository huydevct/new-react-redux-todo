import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        id: 1,
        title: "Viec 1",
        completed: false,
      },
      {
        id: 2,
        title: "Viec 2",
        completed: false,
      },
      {
        id: 3,
        title: "Viec 3",
        completed: false,
      },
    ],
  },
});

const todosReducer = todoSlice.reducer;


//Selector
export const todosSelector = state => state.todosReducer.allTodos

export default todosReducer