import React, { useState } from 'react';

export default function TodoForm() {
  const [input, setInput] = useState('');
  console.log(setInput);

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
        />
      </form>
      <button type="submit" className="todo-button">Add todo</button>
    </div>
  );
}
