import React, { useState } from "react";
import useToggle from "./hooks/useToggle";

const Toggler = () => {
    // This one uses standard useState hook
    const [isHappy, setIsHappy] = useState(true);
    // This one uses a custom hook - default initial value is false
    const [isFish, toggleIsFish] = useToggle();

    return (
        <div>
            <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? "#;o)" : "#;o("}</h1>
            <h1 onClick={toggleIsFish}>{isFish ? "Haddock" : "Cucumber"}</h1>
        </div>
    )
} 

export default Toggler;
