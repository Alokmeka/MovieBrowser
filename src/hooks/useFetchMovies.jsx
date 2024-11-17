import { useState, useEffect, useRef } from "react";
import axios from "axios";
import debounce from "lodash/debounce";

const useFetchMovies = (searchQuery, filters) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedFetchMovies = useRef();

  const fetchMovies = async () => {
    console.log("fetchMovies called with:", { searchQuery, isLoading });

    if (!searchQuery) return;
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "7bf3a53d",
          s: searchQuery,
          ...filters,
          page,
        },
      });

      // Check for 401 status code
      if (response.status === 401) {
        console.warn("API limit reached. Try after some time.");
        alert("Free API call has reached the limit. Try again later.");
        return;
      }

      // Handle successful response
      if (response.status === 200 && response.data.Response === "True") {
        setMovies((prev) =>
          page === 1 ? response.data.Search : [...prev, ...response.data.Search]
        );
      } else {
        console.warn("No movies found or invalid response.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const debouncedFn = debounce(fetchMovies, 300);
    debouncedFetchMovies.current = debouncedFn;

    return () => {
      debouncedFn.cancel();
    };
  }, [fetchMovies]);

  useEffect(() => {
    if (debouncedFetchMovies.current) debouncedFetchMovies.current();
  }, [searchQuery, filters, page]);

  const fetchMoreMovies = () => {
    if (!isLoading) setPage((prev) => prev + 1);
  };

  return { movies, fetchMoreMovies, isLoading };
};

export default useFetchMovies;
