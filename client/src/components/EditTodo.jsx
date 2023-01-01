import React, { useState } from "react";

function EditTodo() {
  const [description, setDescription] = useState("");

  const handleOnChange = (e) => {
    setDescription(e.target.value());
  };

  return (
    <>
      <label
        htmlFor="my-modal"
        className="btn btn-outline btn-sm btn-success lowercase"
      >
        edit
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
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
            <button className="btn btn-sm btn-outline btn-success lowercase">
              submit
            </button>
            <label
              htmlFor="my-modal"
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
