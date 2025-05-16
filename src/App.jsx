import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;
