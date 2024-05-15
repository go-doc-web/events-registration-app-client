import { useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import EventBoard from "../../components/EventsBoard";

import { fetchData } from "../../api/events";
import "./HomePage.css";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFeychEvents = async () => {
      try {
        setLoading(true);
        const { data } = await fetchData(1, 12);
        console.log("datadata", data);
        setEvents(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getFeychEvents();
  }, []);

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
          <EventBoard events={events} />
        </section>
        <section className="section-pagination">
          <div>1 2 3 4 5 6</div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
