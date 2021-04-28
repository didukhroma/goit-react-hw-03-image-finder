const ImageGalleryItem = ({ src, tags, modalImg, toggleModal }) => {
  const handleClick = () => {
    toggleModal(modalImg, tags);
  };
  return (
    <li className="ImageGalleryItem" onClick={handleClick}>
      <img src={src} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
export default ImageGalleryItem;
