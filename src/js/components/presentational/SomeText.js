import React from "react";
import {render} from "react-dom";

const SomeText = ({text}) => (
    <button type="button" className="btn btn-primary">
        Buu:{text}
    </button>
);


const wrapper = document.getElementById("someplace");
render(<SomeText text="AbraKadabra"/>, wrapper);


export default SomeText;