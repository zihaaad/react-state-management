import ChildComponent from "./ChildComponent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncComponent = ({count, setCount}: TProps) => {
  return (
    <div className="border border-red-500 p-10 m-10">
      <button
        className="text-3xl text-white bg-slate-400 rounded-lg font-semibold w-20 h-14"
        onClick={() => setCount((prev) => prev + 1)}>
        {count}
      </button>
      <ChildComponent count={count} />
    </div>
  );
};

export default CounterWithFuncComponent;
