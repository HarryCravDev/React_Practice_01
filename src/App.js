import React from "react";
import SearchBar from "./Components/searchBar/SearchBar";

export class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
