import React, { createRef } from "react";
import ChildInput from "./ChildInput";

function ParentInput() {
    const inputRef = createRef<HTMLInputElement>();

    function handleClick() {
        inputRef.current?.focus();
        console.log("inputRef.current: ", inputRef.current);
    }
    console.log("inputRef.current: ", inputRef.current);
    return (
        <div>
            <input name="createRef example" ref={inputRef}/>
            {/* <ChildInput />
            <ChildInput ref={inputRef} /> */}
            <button onClick={handleClick}>Focus Input!</button>
        </div>
    );
}

export default ParentInput;