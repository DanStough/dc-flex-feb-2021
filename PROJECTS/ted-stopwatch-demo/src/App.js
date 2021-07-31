import './App.css';
import {Stopwatch} from './components/Stopwatch';
import {useState} from 'react';

const stopwatchesDefault = [
    {
        id: 1,
        name: 'one'
},
    {
        id: 2,
        name: 'two',
    },
    {
        id: 3,
        name: 'three',
}
]

function App() {

  const [stopwatches, setStopwatches] = useState(stopwatchesDefault);
  const [runningStopwatch, setRunningStopwatch] = useState(-1);


  const handleClick = (stopwatchId) => {
      setRunningStopwatch(stopwatchId)
      console.log("Click registered with App.js")
  }

  return (
    <div className="App">
        <h1>Ted's Stopwatch Demo</h1>
        { stopwatches.map(arrayItem => {

            const thisStopwatchIsActive = arrayItem.id === runningStopwatch;

            return <Stopwatch 
            key={arrayItem.id}
            id={arrayItem.id}
            name={arrayItem.name} 
            isActive={thisStopwatchIsActive}
            childHandleClick={handleClick}/>
         })}
    </div>
  );
}

export default App;
