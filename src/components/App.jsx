import { useState } from "react";
import { Header } from "./Header";
import { ToDoList } from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish homework", completed: false },
    { id: 3, text: "Call mom", completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const editTodo = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
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
