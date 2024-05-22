import React from "react";

import css from "./ParticipantsBoard.module.css";
// import { useSelector } from "react-redux";

const ParticipantsBoard = ({ filteredParticipants }) => {
  // const { participants } = useSelector((state) => state.participant);

  return (
    <ul className={css.participantsList}>
      {filteredParticipants.map((participant) => (
        <li key={participant._id} className={css.participantsCard}>
          <h2 className={css.cardTitle}>{participant.fullName}</h2>
          <p>{participant.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default ParticipantsBoard;
