import "./App.css";
import { useTextContext } from "./hooks/useTextContext";

function App() {
  console.log('use app js :',useTextContext());
  const {state,dispatch} = useTextContext();

  console.log(state);
  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "HELLO" })}>Hello</button>
      <button onClick={() => dispatch({ type: "BYE" })}>Bye</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default App;
