import {useDeleteTodoMutation, useUpdateTodoMutation} from "@/redux/api/api";
import {Button} from "../ui/button";
import Checkbox from "../ui/checkbox";
import {UpdateTodoModal} from "./UpdateTodoModal";

type TTodoCardProps = {
  _id: string;
  title: string;
  priority: string;
  description: string;
  isCompleted?: boolean;
};

const TodoCard = ({
  _id,
  title,
  priority,
  description,
  isCompleted,
}: TTodoCardProps) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const toggleState = () => {
    const taskData = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };

    const options = {
      id: _id,
      data: taskData,
    };

    updateTodo(options);
  };

  return (
    <div className="bg-white rounded-md border text-wrap flex items-center justify-between p-4">
      <Checkbox defaultChecked={isCompleted} onCheckedChange={toggleState} />
      <p className="font-semibold">{title}</p>
      <p>{description}</p>
      <p>{priority}</p>
      <p>
        {isCompleted ? (
          <span className="text-green-500 font-semibold">Completed</span>
        ) : (
          <span className="text-red-500">In Progress</span>
        )}
      </p>
      <div className="space-x-5">
        <Button onClick={() => deleteTodo(_id)} variant="destructive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <UpdateTodoModal id={_id} />
      </div>
    </div>
  );
};

export default TodoCard;
