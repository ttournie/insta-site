import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={e => {
            e.preventDefault();
            // Assemble data into object
            var input = {
              tags: search.value,
            };
            // Call method from parent component
            // to handle submission
            props.submitTags(input);
            // Reset form
            e.target.reset();
          }}
            className="form-horizontal"
      >
      <label htmlFor="search">Search</label>
      <input className="searchText" type="text" id="search" name="search"/>
      <input className="searchButton" type="button" id="submit" value="Search"/>
    </form>
  )
}

export default Search;
