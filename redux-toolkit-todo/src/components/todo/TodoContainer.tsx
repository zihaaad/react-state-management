import {useAppSelector} from "@/redux/hook";
import {AddTodoModal} from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const {todos} = useAppSelector((state) => state.todos);
  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[3px]">
        {todos.length > 0 ? (
          <div className="bg-white p-5 w-full h-full space-y-5 rounded-lg">
            {todos.map((todo) => (
              <TodoCard key={todo.id} {...todo} />
            ))}
          </div>
        ) : (
          <div className="bg-white text-2xl p-5 font-semibold flex justify-center items-center rounded-md">
            <p>~ There Is No Task In Pending !!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
