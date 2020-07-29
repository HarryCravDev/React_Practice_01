import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
