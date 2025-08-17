import { useState } from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  addTodo,
  editTodo,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 p-4 bg-gray-100 w-xs md:w-sm lg:w-md xl:w-lg 2xl:w-xl">
        <ul className="list-none flex flex-col gap-2">
          {todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
        <div className="flex gap-2 mt-auto w-full justify-between items-center">
          <input
            className="flex-1 border-2 border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded-md p-2 w-fit"
            onClick={() => addTodo(inputValue)}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};
