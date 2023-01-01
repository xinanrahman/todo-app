import React, { useState } from "react";

function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOnClick = async (todo_id) => {
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <label
        htmlFor={`id${todo.todo_id}`}
        className="btn btn-outline btn-sm btn-success lowercase"
      >
        edit
      </label>

      <input
        type="checkbox"
        id={`id${todo.todo_id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">edit your todo!</h3>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="type here"
              className="input input-bordered w-full max-w-xs mt-9 mb-4"
              value={description}
              onChange={handleOnChange}
            />
          </div>

          <div className="modal-action">
            <button
              className="btn btn-sm btn-outline btn-success lowercase"
              onClick={() => handleOnClick(todo.todo_id)}
            >
              submit
            </button>
            <label
              htmlFor={`id${todo.todo_id}`}
              className="btn btn-sm btn-error lowercase"
            >
              close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodo;
