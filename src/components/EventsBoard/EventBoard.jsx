/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./EventBoard.module.css";

const EventBoard = ({ events }) => {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        {events?.map((event) => (
          <li key={event._id} className={css.card}>
            <h2 className={css.cardTitle}>{event.title}</h2>
            <p className={css.cardDescription}>{event.description}</p>
            <ul className={css.listLinks}>
              <li className={css.linkItem}>
                <Link className={css.link} to={`register/${event._id}`}>
                  Register
                </Link>
              </li>
              <li className={css.linkItem}>
                <Link className={css.link} to="/participants">
                  Participants
                </Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventBoard;
