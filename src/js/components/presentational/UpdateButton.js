import React from "react";
import {render} from "react-dom";

const UpdateButton = ({text}) => (
    <button type="button" className="btn btn-primary">
        {text}
    </button>
);

// render(<SomeText text="AbraKadabra"/>, document.getElementById("someplace"));


export default UpdateButton;