import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useSortableArray from "../../helpers/sortedEvents";
import css from "./EventBoard.module.css";

const EventsBoard = ({ events }) => {
  const { sortedArray, handleSortChange } = useSortableArray(events);
  // const [sortBy, setSortBy] = useState(null);

  // const sortedEvents = events.slice().sort((a, b) => {
  //   if (sortBy === "title") {
  //     return a.title.localeCompare(b.title);
  //   } else if (sortBy === "date") {
  //     return new Date(a.eventDate) - new Date(b.eventDate);
  //   } else if (sortBy === "organizer") {
  //     return a.organizer.localeCompare(b.organizer);
  //   }
  //   return 0;
  // });

  // const handleSortChange = (sortType) => {
  //   setSortBy(sortType);
  // };

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
        {sortedArray.map((event) => (
          <li key={event._id} className={css.card}>
            <h2 className={css.cardTitle}>{event.title}</h2>
            <p className={css.cardDescription}>{event.description}</p>
            <p className={css.cardOrganizer}>Organizer: {event.organizer}</p>
            <p className={css.cardDate}>
              Date: {new Date(event.eventDate).toLocaleDateString()}
            </p>
            <Link className={css.link} to={`events/${event._id}`}>
              Details
            </Link>
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
