import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitState = {
  todos: TTodo[];
};

const initialState: TInitState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({...action.payload, isCompleted: false});
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    statusToggle: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((todo) => todo.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const {addTodo, removeTodo, statusToggle} = todoSlice.actions;

export default todoSlice.reducer;
