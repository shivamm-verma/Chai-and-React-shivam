import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "msg",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
