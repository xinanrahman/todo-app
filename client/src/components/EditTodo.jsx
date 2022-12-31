import React, { useState } from "react";

function EditTodo() {
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
            <tr>
              <th>1</th>
              <td>todo 1</td>
              <td>button</td>
              <td>button</td>
            </tr>

            <tr>
              <th>2</th>
              <td>todo 2</td>
              <td>button</td>
              <td>button</td>
            </tr>

            <tr>
              <th>3</th>
              <td>todo 3</td>
              <td>button</td>
              <td>button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EditTodo;
