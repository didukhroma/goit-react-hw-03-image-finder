import { PureComponent } from 'react';
import ImageGallery from '../ImageGallery';
import Searchbar from '../Searchbar';
import Api from '../../utils/api/apiService';
import Modal from '../Modal/Modal';

class App extends PureComponent {
  state = {
    query: '',
    images: [],
    showModal: false,
    modalPic: '',
    modalAltText: '',
  };
  // componentDidMount() {
  //   Api.query = this.state.query;
  //   console.log(Api);
  // }
  submitHandler = text => {
    this.setState(() => ({
      query: text,
    }));
  };
  componentDidUpdate() {
    if (Api.query === this.state.query) return;
    Api.query = this.state.query;
    Api.fetchRequest().then(res => {
      this.setState({ images: res.hits });
    });
  }
  toggleModal = (modalImg, tags) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalPic: modalImg,
      modalAltText: tags,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.submitHandler} />
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
      </div>
    );
  }
}

export default App;

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
