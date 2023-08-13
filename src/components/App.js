<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from "react";
import Slider from "./Slider";
import "../styles/App.css"


const App = ()=>{
    
    return (<>
    <h1 id="review-heading">Reviews</h1>
    <Slider />
    </>)
}

export default App;
