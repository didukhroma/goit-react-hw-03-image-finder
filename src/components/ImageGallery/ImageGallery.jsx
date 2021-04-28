import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className="ImageGallery">
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
export default ImageGallery;
