import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import css from "./ParticipantsPage.module.css";
import ParticipantsBoard from "../../components/ParticipantsBoard/ParticipantsBoard";
import EventRegisterLink from "../../components/EventRegisterLink";

import { Link } from "react-router-dom";

import { getParticipantsByIdEvent } from "../../redux/operations/eventOperation";

const ParticipantsPage = () => {
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { isLoading, error, participants } = useSelector(
    (state) => state.participant
  );

  useEffect(() => {
    dispatch(getParticipantsByIdEvent({ eventId }));
  }, [dispatch, eventId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (participants.length === 0) {
    return (
      <>
        <EventRegisterLink eventId={eventId} />
      </>
    );
  }

  return (
    <>
      <section className={css.sectionParticipants}>
        <Link to="/">Back to home</Link>
        <div className="container">
          <h1 className={css.participantsTitle}>
            <q>Awesome Event</q> participants
          </h1>
          <ParticipantsBoard />
        </div>
      </section>
    </>
  );
};

export default ParticipantsPage;
