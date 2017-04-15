import React from 'react';

const Search = (props) => {
  let tagsInput = null;
  return (
    <form onSubmit={e => {
            e.preventDefault();
            // Assemble data into object
            var input = {
              tags: tagsInput.value,
            };
            console.log(tagsInput.value);
            // Call method from parent component
            // to handle submission
            props.submitTags(tagsInput.value);
            // Reset form
            e.target.reset();
          }}
            className="form-horizontal"
      >
      <label htmlFor="search">Search</label>
      <input className="searchText" type="text" name="search" ref={node => tagsInput = node} />
      <input className="searchButton" type="submit" value="Search"/>
    </form>
  )
}

export default Search;
