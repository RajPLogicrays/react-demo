import React, { forwardRef } from "react";

function ForwardRefH(props, ref){
    return(
        <>
            <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef(ForwardRefH);