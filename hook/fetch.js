import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://quotes85.p.rapidapi.com/getrandomquote",
    headers: {
      "X-RapidAPI-Key": "4f2a61d822mshf9742ec660cb5f2p12302ejsnd48dd93769e3",
      "X-RapidAPI-Host": "quotes85.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      console.log("Api Response", response.data);
      setData(response.data || null);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(false);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
