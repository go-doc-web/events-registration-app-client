/* eslint-disable react/prop-types */
import css from "./EventBoard.module.css";

const EventBoard = ({ events }) => {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        {events?.map((event) => (
          <li key={event._id} className={css.card}>
            <h2 className={css.cardTitle}>{event.title}</h2>
            <p className={css.cardDescription}>{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventBoard;
