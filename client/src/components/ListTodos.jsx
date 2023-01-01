import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  const handleOnClick = async (todo_id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${todo_id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== todo_id));
    } catch (err) {
      console.error(err.message);
    }
  };

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
              <th className="lowercase">description</th>
              <th className="lowercase">edit</th>
              <th className="lowercase">delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.todo_id}>
                  <td>{todo.description}</td>
                  <td>
                    <EditTodo todo={todo}></EditTodo>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline btn-sm btn-error lowercase"
                      onClick={() => handleOnClick(todo.todo_id)}
                    >
                      delete
                    </button>
                  </td>
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
