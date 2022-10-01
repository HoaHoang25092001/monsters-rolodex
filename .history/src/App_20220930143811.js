import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
     .then((users) => {
        this.setState({
          monsters: users,
        },
        () => {
          console.log(this.state.monsters);
      });
    })
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
          <button onClick={() => {
            this.setState(() => {
              return {
                name: {firstName:'Kim', lastName:'Jisoo'},
                company: 'YTM'
              };
            }, () => {});
          }}>
          Back name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
