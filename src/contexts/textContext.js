import { createContext, useReducer } from "react";

export const TextContext = createContext();

export const reducer = (state, action) => {
  let newState;
  console.log("state:", state);
  console.log("action type:", action.type);
  switch (action.type) {
    case "HELLO":
      newState = "Hello world";
      break;
    case "BYE":
      newState = "Bye world";
      break;
    case "RESET":
      newState = null;
      break;
    default:
      return state;
  }
  return newState;
};

export const TextContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    text: "default",
  });
  return (
    <TextContext.Provider value={{ state, dispatch }}>
      {children}
    </TextContext.Provider>
  );
};
