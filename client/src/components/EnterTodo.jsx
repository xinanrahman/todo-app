import React, { useState } from "react";

function EnterTodo() {
  const [description, setDescription] = useState("");

  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-5">
        {" "}
        Your Personal ToDo List
      </h1>
      <form className="input-group justify-center mt-5">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={handleOnChange}
        ></input>
        <button className="btn btn-success" onSubmit={handleOnSubmit}>
          Enter
        </button>
      </form>
    </>
  );
}

export default EnterTodo;
