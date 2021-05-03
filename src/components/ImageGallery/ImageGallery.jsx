import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          modalImg={largeImageURL}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array,
  toggleModal: PropTypes.func,
};
export default ImageGallery;
