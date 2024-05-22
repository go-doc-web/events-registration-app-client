import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EventsBoard from "../../components/EventsBoard/EventBoard";
// import config from "../../config/apiConfig";

const baseURL =
  import.meta.env.VITE_REACT_APP_API_URL_LOCAL ||
  import.meta.env.VITE_REACT_APP_API_URL_DEPLOY;

const ScrollPaginationPage = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getEvents = async () => {
      try {
        if (fetching) {
          console.log("fetch", fetching);
          const res = await axios.get(
            `${baseURL}/events?page=${currentPage}&pageSize=12`
          );

          console.log("total", res.data.total);

          setEvents((prevEvents) => [...prevEvents, ...res.data.data]);
          setCurrentPage((prevState) => prevState + 1);

          setTotal(res.data.total);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setFetching(false);
      }
    };
    getEvents();
  }, [currentPage, fetching]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        12 &&
      events.length < total
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <>
      <section>
        <div className="container">
          <h1>Scroll Pagination Page</h1>
          <Link to="/">Go to the Home</Link>
        </div>
        <EventsBoard events={events} />
      </section>
    </>
  );
};

export default ScrollPaginationPage;
