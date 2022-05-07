import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.refresh();
  }

  refresh() {
    axios
      .get(`${URL}?sort=-createdAt`)
      .then((resp) =>
        this.setState({ ...this.state, description: "", list: resp.data })
      );
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then((resp) => {
      this.setState((resp) => this.refresh());
    });
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  render() {
    return (
      <div>
        <PageHeader name="Taréfas" small="Cadastro" />
        <TodoForm
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleChange={this.handleChange}
        />
        <TodoList list={this.state.list}/>

        <h2>Nossa história</h2>
        <p>Lorem ipsum dodod</p>
      </div>
    );
  }
}
