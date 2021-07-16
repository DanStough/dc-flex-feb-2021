import {useSelector, useDispatch } from 'react-redux';
import { useGetRandomDogImagesQuery } from './services/dog'
// import { useState } from 'react';


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
    const { data, error, isLoading } = useGetRandomDogImagesQuery(value);

    // DATA LOOKS LIKE THIS
    // {
    //     "message": [
    //         "https://images.dog.ceo/breeds/kuvasz/n02104029_1313.jpg",
    //         "https://images.dog.ceo/breeds/malinois/n02105162_6513.jpg",
    //         "https://images.dog.ceo/breeds/bluetick/n02088632_2099.jpg"
    //     ],
    //     "status": "success"
    // }

    const color = useSelector(selectColor);
    const dispatch = useDispatch()

    return (
        <div className="App">
            <h1>Counter</h1>
            <h2 style={{color: color}}>{value}</h2>
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

            <h1>Random Dog Images</h1>
            { error ? <h3 style={{color: "red"}}>{error.message}</h3> : isLoading ?  <h3>LOADING...</h3> : data?.message.map( imageUrl => <img key={imageUrl} alt="" src={imageUrl} />) }
        </div>
    );
}

export default App;
