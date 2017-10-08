import React from "react";
import "./QueryForm.css";

const QueryForm = props =>
  <form className="search">
    <div className="form-group">
      <label htmlFor="search-query" name="search-query">Topic:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="search-query"
        type="text"
        id="search-query"
      />
      <label htmlFor="searchQuery" name="search-start">Start Date:</label>
      <input
        value={props.startDate}
        onChange={props.handleInputChange}
        name="search-start"
        type="date"
        id="search-start"
      />
      <label htmlFor="searchQuery" name="search-end">End Date:</label>
      <input
        value={props.endDate}
        onChange={props.handleInputChange}
        name="search-end"
        type="date"
        id="search-end"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>;

export default QueryForm;