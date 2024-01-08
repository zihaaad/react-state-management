const ChildComponent = ({count}: {count: number}) => {
  return (
    <div className="text-xl border border-black m-10 p-10">Count: {count}</div>
  );
};

export default ChildComponent;
