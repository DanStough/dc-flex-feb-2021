



export const Stopwatch = ({id, name, isActive, childHandleClick})=> {
    const handleStartClick = ()=> {
        console.log('Start clicked');
        childHandleClick(id);
        // // Start your stopwatch library start here.
        // start();
    }

    const handleStopClick = ()=> {
        console.log('Stop clicked');
        childHandleClick(-1);
        // // Start your stopwatch library stop here.
        // stop()
    }

    // Reset Handler Here
    
    return (
    <div>
        <h3>Stopwatch {name}</h3>
        {isActive ? <button onClick={handleStopClick}>Stop</button>: 
        <button onClick={handleStartClick}>Start</button>}
    </div>
    )
}
