import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import {Button} from "./components/ui/button";
import {decrement, increment} from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.counter);
  return (
    <>
      <div className="flex justify-center items-center gap-5 h-screen">
        <Button onClick={() => dispatch(decrement())} variant="outline">
          Decrement
        </Button>
        <h1 className="text-2xl font-semibold">{count}</h1>
        <Button onClick={() => dispatch(increment())} variant="outline">
          Increment
        </Button>
      </div>
    </>
  );
}

export default App;
