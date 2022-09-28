import React, { forwardRef } from "react";


type Props = {};

export type Ref = HTMLInputElement;

function ChildInput () {
    return (
        <div>
            <input></input>
        </div>
    );
};

// const ChildInput = forwardRef<Ref, Props>((props, ref) => {
//     return (
//         <div>
//             <input name="forwardRef example" ref={ref}></input>
//         </div>
//     );
// });

export default ChildInput;