import "./App.css";
import TodoForm from "./components/todo/TodoForm";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
