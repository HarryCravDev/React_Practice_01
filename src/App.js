import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./Components/searchBar/SearchBar";

export class App extends React.Component {
  state = {
    images: [],
  };

  //  Fetch images using User Input
  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    // Update state with API response
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
