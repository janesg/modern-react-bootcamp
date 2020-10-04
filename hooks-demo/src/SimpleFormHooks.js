import React, { useState } from "react";
import useInputState from "./hooks/useInputState";

export default () => {
    const [useStateText, setUseStateText] = useState("");
    const [customText, customOnChange, customClear] = useInputState();

    return (
        <div>
            <div>
                <h1>UseState Hook Text : {useStateText}</h1>
                <input 
                    type="text" 
                    value={useStateText} 
                    onChange={e => setUseStateText(e.target.value)} />
                <button onClick={() => setUseStateText("")}>Clear</button>
            </div>
            <div>
                <h1>Custom Hook Text : {customText}</h1>
                <input 
                    type="text" 
                    value={customText} 
                    onChange={customOnChange} />
                <button onClick={customClear}>Clear</button>
            </div>
        </div>
    )
}