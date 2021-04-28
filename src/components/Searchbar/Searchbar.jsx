import { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const {
      target: { value },
    } = event;

    this.setState(() => ({
      query: value,
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;
    onSubmit(query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
