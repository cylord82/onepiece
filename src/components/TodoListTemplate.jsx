import React, { Component } from 'react';
import './TodoListTemplate.less'

//https://velopert.com/3480

class TodoListTemplate extends Component {
  render() {
    return (
      <div>
        <main className="todo-list-template'">
          <div className="title">
          </div>
          <section className="form-wrapper">
            {this.props.form}
          </section>
          <section className="todos-wrapper">
            {this.props.children}
          </section>
        </main>
      </div>
    );
  }
}

export default TodoListTemplate;