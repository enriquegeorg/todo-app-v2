import React, { Component } from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Todo extends Component {
    render(){
        return(
            <div>
                <PageHeader name="Taréfas" small="Cadastro" />
                <TodoForm />
                <TodoList />

                <h2>Nossa história</h2>
                <p>Lorem ipsum dodod</p>
            </div>
        )
    }
}