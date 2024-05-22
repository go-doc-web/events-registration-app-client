import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle";
import EventBoard from "../../components/EventsBoard";
import Pagination from "../../components/Pagination/Pagination";
import { getPosts } from "../../redux/operations/eventOperation";

import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    error,
    events: { data, size, total },
  } = useSelector((s) => s.event);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("baseURL", import.meta.env.VITE_API_URL);
  console.log("baseURL", import.meta.env.VITE_REACT_APP_API_URL_DEPLOY);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(total / size)) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    dispatch(getPosts({ page: currentPage, pageSize: 12 }));
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No events available</p>;
  }

  const totalPages = Math.ceil(total / size);

  return (
    <main>
      <div className="container">
        <section className="section-title">
          <PageTitle className="title-page" text="events" />
          <Link to="/scroll">
            при переходе по ссылке страница с бесконечной прокруткой(пробовать
            на моб версии ){" "}
          </Link>
        </section>
        <section className="section-board">
          {data && <EventBoard events={data} />}
        </section>
        <section className="section-pagination">
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
