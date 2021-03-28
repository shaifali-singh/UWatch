import React from 'react';

class SearchBar extends React.Component {

    state = { term : '' };

onInputChange = event => {
    this.setState( {term : event.target.value });
};

onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
};

render() {    
  return (
      <div className="search-bar ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                  <label>Video Search</label>
                  {/* //alternative
                  <input type="text" onChange={(event) => console.log(event.target.value)}/> */}
                  <input 
                  type="text"
                  value={this.state.term} 
                  onChange={this.onInputChange}
                  />
              </div>
          </form>
      </div>
  );
}
}

export default SearchBar;