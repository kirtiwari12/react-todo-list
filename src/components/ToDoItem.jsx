import { useState } from "react";

export const ToDoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  return (
    <li className="flex items-center gap-2">
      {isEditing ? (
        <div className="flex items-center gap-2 justify-between w-full">
          <div className="flex items-center gap-2">
            <input
              title="Edit todo"
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              title="Save"
              className="p-2 cursor-pointer hover:bg-gray-200 rounded-md transition-all duration-150"
              onClick={() => {
                editTodo(todo.id, editedText);
                setIsEditing(false);
              }}
            >
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
            <button
              title="Cancel"
              className="p-2 cursor-pointer hover:bg-gray-200 rounded-md transition-all duration-150"
              onClick={() => {
                setIsEditing(false);
                setEditedText(todo.text);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 justify-between w-full">
          <div
            title={`${
              todo.completed ? "Mark as incomplete" : "Mark as complete"
            }`}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggleTodo(todo.id)}
          >
            <input
              className="cursor-pointer hover:scale-110 transition-all duration-300"
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => {}}
            />
            <span className={`${todo.completed ? "line-through" : ""}`}>
              {todo.text}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              title="Edit"
              className="p-2 cursor-pointer hover:bg-gray-200 rounded-md transition-all duration-150"
              onClick={() => setIsEditing(true)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              title="Delete"
              className="p-2 cursor-pointer hover:bg-gray-200 rounded-md transition-all duration-150"
              onClick={() => deleteTodo(todo.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
