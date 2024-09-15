import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
      
      // console.log("add",state)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      // console.log("remove", state.todos)
      
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      state.todos = state.todos.sort(
        (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
      );
      // console.log("toggole",state.todos)
    },
    updateTodo: (state, action: PayloadAction<Partial<TTodo>>) => {
      // console.log("payload",action.payload)
      // const task = state.todos.find(item =>item.id == action.payload.id)
      const { id, ...updatedTodo } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      );
    },

    filterTodo : (state , action: PayloadAction<string>) =>{

      const priority = action.payload;
      state.todos = state.todos.sort((a, b) => {
        if (a.priority === priority && b.priority !== priority) {
          return -1;
        }
        if (a.priority !== priority && b.priority === priority) {
          return 1;
        }
        return 0;
      });
      
    }
  },
});


export const { addTodo, removeTodo, toggleCompleted, updateTodo, filterTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
