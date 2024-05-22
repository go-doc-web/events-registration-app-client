import React from "react";
import { Link } from "react-router-dom";
import css from "./RegisterToEventPage.module.css";
import EventRegistration from "../../components/EventRegistration";

const RegisterToEventPage = () => {
  return (
    <section className={css.sectionRegistartion}>
      <div className="container ">
        <Link to="/">Go to Home</Link>
        <EventRegistration />
      </div>
    </section>
  );
};

export default RegisterToEventPage;
