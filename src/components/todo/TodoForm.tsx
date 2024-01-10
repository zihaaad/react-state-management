import {useContext} from "react";
import {TodoContext} from "../../context/TodoProvider";

const TodoForm = () => {
  const {state, dispatch} = useContext(TodoContext);

  return (
    <div>
      <h1>This is a todo form component</h1>
    </div>
  );
};

export default TodoForm;
