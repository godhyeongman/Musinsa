import { useEffect, useState } from 'react';

// Todo: 모든 NUll -> undefined로 마이그레이션
const initialState: {
  payLoad: any;
  isLoading: boolean;
  isError: boolean;
} = {
  payLoad: null,
  isLoading: false,
  isError: true,
};
function useFetchData(url: string) {
  const [fetchState, setFetchState] = useState(initialState);

  const startFetch = async (apiURL: string) => {
    setFetchState({ ...fetchState, isLoading: true });
    try {
      const data = await fetch(apiURL);
      const JSONData = await data.json();
      setFetchState({ ...fetchState, payLoad: JSONData });
    } catch {
      setFetchState({ ...fetchState, isError: true });
      throw new Error('데이터 통신에러');
    } finally {
      setFetchState({ ...fetchState, isLoading: false });
    }
  };
  useEffect(() => {
    startFetch(url);
  }, []);

  return fetchState;
}

export default useFetchData;
