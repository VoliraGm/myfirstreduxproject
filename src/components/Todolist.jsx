import React from "react";
import Toggleitems from "./Toggleitems";

const ToggleList = (todos) => {

  return (
      <ul>
          {
              todos.map(todo.map => <TodoItem key={todo.id} {...todo}/>)
          }

      </ul>
  )
}

export default ToggleList