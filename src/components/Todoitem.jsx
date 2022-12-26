import React from "react";


const Todoitems = (id, text, completed, removeTodo, toggleTodoCompleted) => {
  return(
      <li>
        <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTodoCompleted(id)}
        />
        <span>{text}</span>
        <span onClick={() => removeTodo(id)} className="delete">&times;</span>
      </li>
  )
}

export default Todoitems