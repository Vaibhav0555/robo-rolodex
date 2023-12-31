import { robots } from "../assets/robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import { Component, useEffect, useState } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response.json();
      })
      .then((users) => {
        this.setState({ robots: robots });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfeild: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfeild.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1> RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
