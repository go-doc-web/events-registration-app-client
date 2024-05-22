import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useSortableArray from "../../helpers/sortedEvents";
import css from "./EventBoard.module.css";

const EventsBoard = ({ events }) => {
  const { sortedArray, handleSortChange } = useSortableArray(events);

  return (
    <section className={css.section}>
      <div className={css.sortOptions}>
        <button
          className={css.sortButton}
          onClick={() => handleSortChange("title")}
        >
          Sort by Title
        </button>
        <button
          className={css.sortButton}
          onClick={() => handleSortChange("date")}
        >
          Sort by Date
        </button>
        <button
          className={css.sortButton}
          onClick={() => handleSortChange("organizer")}
        >
          Sort by Organizer
        </button>
      </div>
      <ul className={css.list}>
        {sortedArray.map((event, index) => (
          <li key={index} className={css.card}>
            <h2 className={css.cardTitle}>{event.title}</h2>
            <p className={css.cardDescription}>{event.description}</p>
            <p className={css.cardOrganizer}>Organizer: {event.organizer}</p>
            <p className={css.cardDate}>
              Date: {new Date(event.eventDate).toLocaleDateString()}
            </p>
            <ul className={css.listLinks}>
              <li className={css.linkItem}>
                <Link className={css.link} to={`/register/${event._id}`}>
                  Register
                </Link>
              </li>
              <li className={css.linkItem}>
                <Link className={css.link} to={`/participants/${event._id}`}>
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

EventsBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      eventDate: PropTypes.string.isRequired,
      organizer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventsBoard;
