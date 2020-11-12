import React from "react";
import IconButton from "../template/IconButton";
import "./TodoList.css";

const TodoList = ({ list, handleRemove, handleDone }) => {
  return (
    <div>
      <table className="table mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col" className=" max-w">
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          {list &&
            list.map((item, i) => (
              <tr
                key={item.description + i}
                className={item.done ? "done" : ""}
              >
                <td className={`${item.done ? "done" : ""}`}>
                  {item.description}
                </td>
                <td className="max-w">
                  <IconButton
                    customStyle={item.done ? "warning" : "success"}
                    icon={item.done ? "redo" : "check"}
                    onClick={() => {
                      handleDone(i);
                    }}
                  />
                  {item.done && (
                    <IconButton
                      customStyle="danger"
                      icon="trash"
                      onClick={() => {
                        handleRemove(i);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
