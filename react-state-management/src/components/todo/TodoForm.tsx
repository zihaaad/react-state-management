import {FormEvent, useContext, useState} from "react";
import {TodoContext} from "../../context/TodoProvider";

const TodoForm = () => {
  const {state, dispatch} = useContext(TodoContext);
  const [task, setTask] = useState("");

  console.log(state);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };

    dispatch({type: "addTodo", payload: todo});
  };

  return (
    <div className="text-center">
      <h1 className="bg-gray-600 font-semibold text-white py-2 ">
        Todo Submission
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border rounded px-2 py-3 m-5 w-1/2 border-gray-600 opacity-60"
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          name="todo"
          placeholder="✍ write TODO here . . . "
        />
        <button
          className="px-2 py-1 text-white bg-gray-500 rounded"
          type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
