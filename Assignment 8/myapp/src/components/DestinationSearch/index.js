import "./index.css";
import DestinationItem from "../DestinationItem";
import { Component } from "react";

class DestinationSearch extends Component {
  state = {
    searchInput: "",
    destination: this.props.destinationsList,
  };
  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  render() {
    const { searchInput, destination } = this.state;
    const searchResult = destination.filter((eachItem) => {
      return eachItem.name.includes(searchInput);
    });
    return (
      <div className="main">
        <h1 className="heading"> DestinationSearch</h1>
        <input
          type="Search" placeholder="Search" className="button"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <div className="img">
          {searchResult.map((eachItem) => (
            <DestinationItem destinationsList={eachItem} />
          ))}
        </div>
      </div>
    );
  }
}

export default DestinationSearch;
