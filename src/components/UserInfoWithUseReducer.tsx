import {useReducer} from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return {...currentState, name: action.payload};
    default:
      break;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <form>
      <input
        onChange={(e) => dispatch({type: "addName", payload: e.target.value})}
        className="border border-purple-300 rounded p-1 m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        className="border border-purple-300 rounded p-1 m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        className="border border-purple-300 rounded p-1 m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-purple-500 text-white">
        Submit
      </button>
    </form>
  );
};

export default UserInfoWithUseReducer;
