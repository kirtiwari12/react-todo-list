import { useState, useEffect } from "react";
import { Header } from "./Header";
import { ToDoList } from "./ToDoList";

const LOCAL_STORAGE_KEY = "todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      setTodos([
        { id: 1, text: "Buy groceries", completed: false },
        { id: 2, text: "Finish homework", completed: false },
        { id: 3, text: "Call home", completed: false },
      ]);
    }
  }, []);

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  const addTodo = (text) => {
    const maxId = Math.max(...todos.map((todo) => todo.id));
    const newTodos = [...todos, { id: maxId + 1, text, completed: false }];
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  const editTodo = (id, text) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    );
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  return (
    <>
      <Header />
      <ToDoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;
