import React, { Component } from "react";
import Nav from "./components/Nav";
import Matrix from "./components/Matrix";
import Winner from "./components/Winner";
import saiyans from "./saiyans.json";

class App extends Component {
  state = {
    count: 0,
    saiyans,
    clicked: []
  };

  handleIncrement = (id) => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ clicked: this.state.clicked.concat(id)});
  }

  handleReset = () => {
    this.setState({ count: 0 });
    this.setState({ clicked: [] });
    this.setState({ saiyans: this.state.saiyans.sort(() => Math.random() - 0.5)});
  }
  
  handleClick = id => {
    if (this.state.clicked.indexOf(id) >= 0) {
      this.handleReset();
    } else {
       this.handleIncrement(id);
       this.setState({ saiyans: this.state.saiyans.sort(() => Math.random() - 0.5)});
     }
  }

  render() {
    return (
      <div>
        { this.state.count === 12 ? (
          <Winner 
          resetState={this.handleReset}
          />
         ) : 
        <div className="wrapper">
          <Nav 
          count={this.state.count} 
          />
          <div className="container">
            <div className="row">
              {this.state.saiyans.map(saiyan => (
                <Matrix 
                key={saiyan.id} 
                handleClick={this.handleClick} 
                saiyans={saiyan}
                />
              ))}            
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default App;
