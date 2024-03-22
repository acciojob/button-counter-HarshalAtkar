
import React from "react";
import './../styles/App.css';

const App = () => {
  
  const count=0;
  
  increment(){
     count=count+1;
  }
  return (
  

    <div>
       <p>Button clicked {this.count} times</p>
       <button onClick={this.increment}>Increment</button>
    </div>
  )
}

export default App
