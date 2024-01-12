import "./App.css";
import {Button} from "./components/ui/button";

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-5 h-screen">
        <Button variant="outline">Decrement</Button>
        <h1 className="text-2xl font-semibold">0</h1>
        <Button variant="outline">Increment</Button>
      </div>
    </>
  );
}

export default App;
