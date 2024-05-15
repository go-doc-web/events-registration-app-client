// eslint-disable-next-line no-unused-vars
import css from "./PageTitle.module.css";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};

export default PageTitle;
