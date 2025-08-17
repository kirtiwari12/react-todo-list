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
  const [isError, setIsError] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 p-4 bg-[#ffffff80] w-xs md:w-lg lg:w-md xl:w-lg 2xl:w-xl border-2 border-gray-300 rounded-md">
        <div className="flex gap-2 mt-auto w-full justify-between items-center relative mb-4">
          <div className="flex flex-col gap-2 flex-1">
            <input
              title="Add a new todo"
              className=" border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Add a new todo"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setIsError(false);
                if (e.target.value.trim() === "") {
                  setIsError(true);
                } else {
                  setIsError(false);
                }
              }}
            />
            {isError ? (
              <small className="text-red-500 text-sm absolute bottom-[-25px] left-0">
                This is a required field
              </small>
            ) : null}
          </div>
          <button
            title="Add todo"
            className="bg-blue-500 text-white rounded-md p-2 w-fit cursor-pointer"
            onClick={() => {
              setIsError(false);
              if (inputValue.trim() === "") {
                setIsError(true);
              } else {
                setIsError(false);
                addTodo(inputValue);
                setInputValue("");
              }
            }}
          >
            Add Todo
          </button>
        </div>

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
      </div>
    </div>
  );
};
