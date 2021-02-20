import React from "react";

const SearchBox = (props) => {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Search Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="names"
          type="text"
          className="form-control"
          placeholder="Name"
          id="name"
        />
        {/* Sort button in searchbox */}
        <button
          type="submit"
          onClick={props.handleSort}
          className="btn btn-dark"
        >
          Sort A-Z
        </button>
      </div>
    </form>
  );
}

export default SearchBox;