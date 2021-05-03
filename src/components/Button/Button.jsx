import styles from './Button.module.css';
import PropTypes from 'prop-types';
const Button = ({ type = 'button', title = 'Button', handleClickLoadMore }) => {
  const handlerClick = () => {
    return handleClickLoadMore();
  };
  return (
    <button type={type} onClick={handlerClick} className={styles.Button}>
      {title}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  handleClickLoadMore: PropTypes.func,
};
export default Button;
