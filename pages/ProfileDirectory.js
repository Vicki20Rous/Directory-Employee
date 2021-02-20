import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../src/components/Hero";
import SearchHeadings from "../src/components/SearchHeadings";
import SearchBox from "../src/components/SearchBox";
import Wrapper from "../src/components/Wrapper";


class EmployeeDirectory extends Component {
  state = {
    search: "",
    location: "",
    results: []
  };

  // When the component mounts, load available employees to be displayed
  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then((res) =>
        this.setState({
          results: res.data.results,
        })
      )
      .catch((err) => console.log(err));
      };

  
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value.toLowerCase() });

};

render() {
  const filter = this.state.results.filter((results) =>
    results.name.first.toLowerCase().includes(this.state.search)
  );

  return (
    <Wrapper>

      <div>
        <h1 className="text-center"><Hero /></h1>
        
        <SearchBox
          handleSort={this.handleSort}
          handleInputChange={this.handleInputChange}
        ></SearchBox>

        <SearchHeadings results={filter}></SearchHeadings>
      </div>
    </Wrapper>
  );
}
}


  export default EmployeeDirectory;