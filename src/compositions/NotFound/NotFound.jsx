import React from "react";

import { useNavigate } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={css.NotFound}>
      <h1>Page 404 </h1>
      <p>К сожалению, запрашиваемая страница не существует.</p>
      <button onClick={goHome}>Вернуться на главную</button>
    </div>
  );
};

export default NotFound;
