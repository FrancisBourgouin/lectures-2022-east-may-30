import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(baseUrl) {
  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState(baseUrl);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setData(null);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  return { data, isLoading, fetchData };
}
