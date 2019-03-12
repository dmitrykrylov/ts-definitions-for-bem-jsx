import React, { Component } from "react";
import "./App.css";
import block from "bem-jsx";

const B = block("Block", ["modifier", "anotherModifier"], {
  elementSeparator: "__",
  modifierSeparator: "--",
  modifierValueSeparator: "_",
  kebabCase: false
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <B className="App-header">
          <B.Element as="h1">Block</B.Element>
          <B.Element modifier anotherModifier="test">
            Element
          </B.Element>
          <B.Element
            onClick={() => {
              alert("clicked");
            }}
          >
            Click me
          </B.Element>
        </B>
      </div>
    );
  }
}

export default App;
