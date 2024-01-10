import {ReactNode, createContext} from "react";

export const TodoContext = createContext(undefined);

type TTodoProviderProps = {
  children: ReactNode;
};

const TodoProvider = ({children}: TTodoProviderProps) => {
  const values = {
    todoTitle: "This is a todo title",
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
