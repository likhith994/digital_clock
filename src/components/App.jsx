import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock"
const darkMode =true;
const App= () =>{
    return (<div>
        <button
            className={`btn ${darkMode ? "" : "light-mode"}`}
            onClick={() => {darkMode=false}}
        >
            light mode
        </button>
        <Clock />
        </div>
    );
}


export default App;