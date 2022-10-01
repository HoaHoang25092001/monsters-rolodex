import { Component } from 'react';
import  CardList  from "./components/card-list/card-list.component"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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

  onSearchChange = (e) => {
    console.log(e.target.value);
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    console.log(filteredMonster);
    return (
      <div className="App">
        {/*{filteredMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}*/}
        <CardList monsters={filteredMonster}/>
      </div>
    );
  }
}

export default App;
