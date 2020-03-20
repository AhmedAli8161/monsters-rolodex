import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      inputField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = e => {
    this.setState({ inputField: e.target.value });
  };

  render() {
    const { monsters, inputField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(inputField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeHolder="search monsters"
          changeHandler={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
