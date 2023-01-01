import React, { useState, useEffect } from "react";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <>
      <div className="overflow-x-auto flex justify-center">
        <table className="table table-normal w-3/5 mt-10 lowercase">
          <thead>
            <tr>
              <th></th>
              <th className="lowercase">description</th>
              <th className="lowercase">edit</th>
              <th className="lowercase">delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.todo_id}>
                  <th>{todo.todo_id}</th>
                  <td>{todo.description}</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListTodos;
