import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle";
import EventBoard from "../../components/EventsBoard";

import { fetchData } from "../../api/events";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const eventsSelector = useSelector((s) => s.events);
  console.log("eventsSelector", eventsSelector);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFeychEvents = async () => {
      try {
        setLoading(true);
        const { data } = await fetchData(1, 12);
        dispatch({ type: "SET_ALL_EVENTS", payload: data });
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getFeychEvents();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className="container">
        <section className="section-title">
          <PageTitle className="title-page" text="events" />
        </section>
        <section className="section-board">
          {eventsSelector.length === 0 && <p>Events not</p>}
          {eventsSelector.length > 0 && <EventBoard events={eventsSelector} />}
        </section>
        <section className="section-pagination">
          <div>1 2 3 4 5 6</div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
