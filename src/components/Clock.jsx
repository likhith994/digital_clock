import React from "react";
import ReactDOM from "react-dom";
let now=new Date();
let hour=now.getHours();
let minutes=now.getMinutes();
let seconds=now.getSeconds();
let period ="";
if (hour === 0) {
    hour = 12;
    period = "AM";
}else if (hour === 12) {
    period = "PM";
}else if (hour > 12) {
    hour = hour - 12;
    period = "PM";
}else {
    period = "AM";
}
const Clock= () =>{
    return (<div className="container">
        <h1>{hour}:{minutes}:{seconds}</h1>
    </div>);
}
export default Clock;