import React from "react";

import IconButton from "../template/IconButton";

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            customStyle="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.handleMarkAsDone(todo)}
          ></IconButton>
          <IconButton
            customStyle="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)}
          ></IconButton>
          <IconButton
            customStyle="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.handleRemove(todo)}
          ></IconButton>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default TodoList;
