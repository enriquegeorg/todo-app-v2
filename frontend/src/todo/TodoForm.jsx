import React from "react";

import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

const TodoForm = (props) => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        id="description"
        type="text"
        className="form-control"
        placeholder="Adicione uma tarefa"
      />
    </Grid>
    <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
    </Grid>
  </div>
);

export default TodoForm;
