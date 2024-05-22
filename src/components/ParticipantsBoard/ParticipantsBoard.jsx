import React from "react";

import css from "./ParticipantsBoard.module.css";
import { useSelector } from "react-redux";

const ParticipantsBoard = () => {
  const { participants } = useSelector((state) => state.participant);

  return (
    <ul className={css.participantsList}>
      {participants.map((participant) => (
        <li key={participant._id} className={css.participantsCard}>
          <h2 className={css.cardTitle}>{participant.fullName}</h2>
          <p>{participant.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default ParticipantsBoard;
