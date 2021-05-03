import { Component } from 'react';
import Loader from '../Loader';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

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
    this.setState(() => ({ query: '' }));
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.query}
          />
          {this.props.isLoading && <Loader />}
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};
export default Searchbar;
