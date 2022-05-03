import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

import React from 'react'

export default props => (
    <div className='container'>
        <Menu />
        <Todo />
        <About />
    </div>
)