import { useState } from "react";

const useSortableArray = (initialArray) => {
  const [sortBy, setSortBy] = useState(null);

  const sortedArray = initialArray.slice().sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "date") {
      return new Date(a.eventDate) - new Date(b.eventDate);
    } else if (sortBy === "organizer") {
      return a.organizer.localeCompare(b.organizer);
    }
    return 0;
  });

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };

  return { sortedArray, handleSortChange };
};

export default useSortableArray;
