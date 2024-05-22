import React from "react";
import { Link } from "react-router-dom";
import css from "./EventRegisterLink.module.css";

// eslint-disable-next-line react/prop-types
const EventRegisterLink = ({ eventId }) => {
  return (
    <div className={css.eventLinks}>
      <p>No participants have signed up for the event yet.</p>
      <p>To register for the event, please follow this link:</p>
      <Link to={`/register/${eventId}`} className={css.link}>
        Register for the Event
      </Link>

      <p>Or you can go back to the home page:</p>
      <Link to="/" className={css.link}>
        Back to Home
      </Link>
    </div>
  );
};

export default EventRegisterLink;
