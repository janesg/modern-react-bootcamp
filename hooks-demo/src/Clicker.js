import React, { useState, useEffect } from "react";

const Clicker = () => {
    const [count, setCount] = useState(0);
    const msg = `You've clicked ${count} time(s)`;
    // useEffect runs for every render including first time
    useEffect(() => {
        document.title = msg;
    })
    return (
        <div>
            <p>{msg}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default Clicker;