import React from "react";

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? "markedAsDone" : ""}>
                    {todo.description}
                </td>
                <td>
                    <button
                        className="btn btn-success"
                        onClick={() => props.handleMarkAsDone(todo)}
                    >
                        <i className="fa fa-check"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList