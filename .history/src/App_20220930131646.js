import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName:'kim', lastName:'Jisoo'},
      company: 'YTM'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <p>{this.state.company}</p>
          <button onClick={() => {
            this.setState(() => {
              return {
                name: {firstName:'Hoa', lastName:'Hoang'},
                company: 'FPT'
              };
            }, () => {});
          }}>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
