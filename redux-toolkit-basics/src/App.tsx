import {useState} from "react";
import "./App.css";
import {Button} from "./components/ui/button";
import {Input} from "./components/ui/input";
import {
  calculateByValue,
  decrement,
  increment,
} from "./redux/features/counterSlice";
import {useAppDispatch, useAppSelector} from "./redux/hook";

function App() {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state) => state.counter);
  return (
    <>
      <div className="flex justify-center items-center gap-5 h-screen">
        <div className="flex gap-5">
          <Button onClick={() => dispatch(decrement())} variant="outline">
            Decrement
          </Button>
          <h1 className="text-2xl font-semibold">{count}</h1>
          <Button onClick={() => dispatch(increment())} variant="outline">
            Increment
          </Button>
        </div>
        <div className="flex gap-5">
          <Input
            type="number"
            onChange={(e) => setValue(Number(e.target.value))}
            placeholder="value"
          />
          <Button
            type="submit"
            onClick={() => dispatch(calculateByValue(value))}>
            Calculate
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
