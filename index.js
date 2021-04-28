import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

ReactDOM.render(
  < App />, document.getElementById("root")
);

















// OR //

//  challenge 1

// var h1 = document.createElement("h1");
// h1.innerHTML = "kanhaiya chalase ";
// document.getElementById("root").appendChild(h1);


// and

// challenge 2

// import React from "react";

// import ReactDOM from "react-dom";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <React.Fragment>
//     <h1>My name is kanhaiya</h1>
//     <p>Current Date is = {currDate} </p>
//     <p>Current Time is = {currTime} </p>

//   </React.Fragment>,
//   document.getElementById("root")
// );


//and//

// import React from "react";
// import reactDom from "react-dom";
// import "./index.css";

// let currDate = new Date();
// currDate = currDate.getHours();
// let greeting = "";
// const cssStyle = {

// };

// if (currDate >= 1 && currDate < 12) {
//   greeting = "Good Morning";
//   cssStyle.color = "green";
// } else if (currDate >= 12 && currDate < 19) {
//   greeting = "Good Afternoon";
//   cssStyle.color = "Orange";
// } else {
//   greeting = "Good Night";
//   cssStyle.color = "pink";
// }

// reactDom.render(
//   <React.Fragment>
//     <div>

//       <h1>Hello Sir , <span style={cssStyle}> {greeting} </span></h1>,

//     </div>

//   </React.Fragment>,
//   document.getElementById("root")
// )



// and 

// mport React from "react";
// import reactDom from "react-dom";

// import "./index.css";

// import { add, sub, multi, div } from "./Calc";


// reactDom.render(

//   <React.Fragment>
//     <ol>
//       <h1>React.js calculator</h1>
//       <br></br>
//       <li>The Sum of two number = {add(40, 4)}</li>
//       <li>The Sub of two number = {sub(40, 4)}</li>
//       <li>The Multi of two number = {multi(40, 4)}</li>
//       <li>The Div of two number = {div(40, 4)}</li>
//     </ol>
//   </React.Fragment>,

//   document.getElementById("root")
// );
