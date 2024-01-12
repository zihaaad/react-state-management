import {useContext} from "react";
import {TodoContext} from "../../context/TodoProvider";

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);

  return (
    <div>
      {state.map((item: TTodo) => (
        <li
          key={item.id}
          className={` mx-3 cursor-pointer ${
            item.isCompleted && "line-through"
          }`}
          onClick={() => dispatch({type: "taskComplete", payload: item.id})}>
          {item.title}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
