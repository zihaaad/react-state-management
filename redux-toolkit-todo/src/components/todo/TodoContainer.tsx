import {AddTodoModal} from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[3px]">
        <div className="bg-white p-5 w-full h-full space-y-5 rounded-lg">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* <div className="bg-white text-2xl p-5 font-semibold flex justify-center items-center rounded-md">
          <p>There is no task in pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
