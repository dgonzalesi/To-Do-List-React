/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';

function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const {
    todos, completeTodo, removeTodo, updateTodo,
  } = props;
  Todo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    completeTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
  };

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitUpdate(e.target.value);
    }
  };

  return (todos.map((todo) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={Math.floor(Math.random() * 10000)}>
      <div className="todo-element" key={todo.id} onClick={() => completeTodo(todo.id)} onKeyDown={handleKeyPress}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
          }}
          className="edit-icon"
        />
      </div>

    </div>
  ))
  );
}

export default Todo;
