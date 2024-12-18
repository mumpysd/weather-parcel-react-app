import React from "react";
import ReactDOM from "react-dom";

// Create a simple component
function Welcome() {
    return (
        <h1>Welcome to React!</h1>
    );
  }

// Render the Welcome component in the "root" div
ReactDOM.render(
    <Welcome />, 
    document.getElementById('root')
);