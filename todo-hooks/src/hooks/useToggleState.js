import { useState } from "react";

export default (initialVal = false) => {
    const [toggleVal, setToggleVal] = useState(initialVal);
    return [toggleVal, () => setToggleVal(!toggleVal)];
}