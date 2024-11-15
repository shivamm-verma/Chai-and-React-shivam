import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts/ToDoContext";
import TodoItem from "./Components/TodoItem";
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      setTodos((prev) => {
        [{ id: Date.now(), ...todo }, ...prev];
      });
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prev))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachVal) => eachVal.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((eachVal) =>
        eachVal.id === id
          ? { ...eachVal, completed: !eachVal.completed }
          : eachVal
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}
    >
      <div className="bg-[#26422e] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {console.log("app.jsx hu mai")}
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
                {console.log("you can never find out thiss code.")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
