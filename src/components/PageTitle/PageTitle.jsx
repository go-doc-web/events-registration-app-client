// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
// import css from "./PageTitle.module.css";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};
PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PageTitle;
