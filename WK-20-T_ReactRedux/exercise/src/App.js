import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice'


function App() {
  const number = useSelector((state)=> state.counter.number);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
      console.log("Hello World");
      console.log(increment())
      dispatch(increment())
  }

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={handleIncrementClick} >+1</button>
    </div>
  );
}

export default App;
