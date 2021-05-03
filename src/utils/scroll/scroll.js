const scroll = () => {
  const height = document.documentElement.scrollHeight;
  window.scrollTo({
    top: height,
    behavior: 'smooth',
  });
};
export default scroll;
