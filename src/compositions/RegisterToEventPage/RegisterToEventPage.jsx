import React from "react";
import css from "./RegisterToEventPage.module.css";
import EventRegistration from "../../components/EventRegistration";

const RegisterToEventPage = () => {
  return (
    <section className={css.sectionRegistartion}>
      <div className="container ">
        <EventRegistration />
      </div>
    </section>
  );
};

export default RegisterToEventPage;
