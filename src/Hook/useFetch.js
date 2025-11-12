import { useEffect, useState } from "react";
import { data } from "react-router-dom";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });
  const { data, loading, hasError } = state;

  const getFetch = async () => {
    try {
        useState({
            ...state,
            loading: true,
        });
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error Fetch");
      }
      const data = response.json();
      setState({
        ...state,
        data: data,
        loading: false,
      });
      console.log(data);
    } catch (error) {
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };
useEffect(()=>{
    getFetch()
}, [url])

  return {
    loading,
    data,
    hasError,
  };
};
