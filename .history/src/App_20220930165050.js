import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
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
    console.log('render');
    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes('');
    });
    console.log(filteredMonster);
    return (
      <div className="App">
        <input className='search-box'
          type='search'
          placeholder='search monster'
          onChange={(e) => {
            console.log(e.target.value);
            const searchField = e.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            })
          }} />
        {filteredMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
