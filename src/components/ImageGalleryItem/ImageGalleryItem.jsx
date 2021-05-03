import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ src, tags, modalImg, toggleModal }) => {
  const handleClick = () => {
    toggleModal(modalImg, tags);
  };
  return (
    <li className={styles.ImageGalleryItem} onClick={handleClick}>
      <img src={src} alt={tags} className={styles.ImageGalleryItem__image} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  tags: PropTypes.string,
  modalImg: PropTypes.string,
  toggleModal: PropTypes.func,
};
export default ImageGalleryItem;
