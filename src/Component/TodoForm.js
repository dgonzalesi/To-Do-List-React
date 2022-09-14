import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TodoForm(props) {
  const [input, setInput] = useState('');
  const { onSubmit } = props;
  TodoForm.propTypes = { onSubmit: PropTypes.func.isRequired };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };
  const handleChange = (e) => {
    setInput(`${e.target.value}`);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button type="submit" className="todo-button">Add todo</button>
    </form>

  );
}
