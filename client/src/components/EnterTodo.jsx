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
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-10 py-10">
        {" "}
        what do you want to do today?
      </h1>
      <form
        className="input-group justify-center mt-5"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          className="form-control w-full max-w-xs pl-4"
          placeholder="i want to..."
          value={description}
          onChange={handleOnChange}
        ></input>
        <button className="btn btn-success lowercase">enter</button>
      </form>
    </>
  );
}

export default EnterTodo;
