import { Component } from 'react';
import ImageGallery from '../ImageGallery';
import Searchbar from '../Searchbar';
import apiService from '../../utils/api/apiService';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import scrollTo from '../../utils/scroll/scroll.js';
import styles from './App.module.css';

class App extends Component {
  state = {
    query: '',
    images: [],
    showModal: false,
    modalPic: '',
    modalAltText: '',
    currentPage: 1,
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState(() => ({ isLoading: true }));
      this.getImages();
    }
    if (prevState.images.length !== 0) {
      scrollTo();
    }
  }

  getImages = async () => {
    const { query, currentPage } = this.state;
    const images = await apiService(query, currentPage);
    if (!images) {
      this.setState(() => ({ isLoading: false }));
      return;
    }
    this.setState(prev => ({
      images: [...prev.images, ...images],
      currentPage: prev.currentPage + 1,
      isLoading: false,
    }));
  };

  submitHandler = text => {
    const { query, images } = this.state;
    const isSpecificQuery =
      text.toLowerCase() === query.toLowerCase() && images.length !== 0;
    if (isSpecificQuery) {
      alert(
        'Please enter a more specific word or explore the button "Load more"',
      );
      return;
    }
    this.setState(() => ({
      query: text,
      images: [],
      currentPage: 1,
      error: null,
    }));
  };

  toggleModal = (modalImg, tags) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalPic: modalImg,
      modalAltText: tags,
    }));
  };

  handleClickLoadMore = () => {
    this.setState(() => ({ isLoading: true }));
    this.getImages();
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar
          onSubmit={this.submitHandler}
          isLoading={this.state.isLoading}
        />
        <ImageGallery
          images={this.state.images}
          toggleModal={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal
            src={this.state.modalPic}
            alt={this.state.modalAltText}
            onClose={this.toggleModal}
          />
        )}
        {this.state.images.length !== 0 && (
          <Button
            title={'Load more'}
            handleClickLoadMore={this.handleClickLoadMore}
          />
        )}
      </div>
    );
  }
}

export default App;

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
