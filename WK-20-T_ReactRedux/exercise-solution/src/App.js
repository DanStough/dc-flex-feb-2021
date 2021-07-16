import {useSelector, useDispatch } from 'react-redux';

import {
    decrementValueByAmount,
    incrementValueByAmount,
    overrideValue,
    selectValue
  } from './valueSlice'

import {
    changeColor,
    selectColor
} from './colorSlice'

function App() {

    const value = useSelector(selectValue);
    const color = useSelector(selectColor);
    const dispatch = useDispatch()

    return (
        <div className="App">
            <h1 style={{color: color}}>{value}</h1>
            <button onClick={() => dispatch(incrementValueByAmount(1))}>+1</button>
            <button onClick={() => dispatch(decrementValueByAmount(1))}>-1</button>
            <br/>
            <button onClick={() => dispatch(incrementValueByAmount(5))}>+5</button>
            <button onClick={() => dispatch(decrementValueByAmount(5))}>-5</button>
            <br/>
            <label htmlFor="colors">Text Color:</label>
            <select name="colors" onChange={(e) => dispatch(changeColor(e.target.value))} defaultValue={color}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
            </select>
            <br/>
            <label htmlFor="override">Counter Override:</label>
            <input type="number" onChange={(e) => dispatch(overrideValue(e.target.value))} value={value} />
        </div>
    );
}

export default App;
