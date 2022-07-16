import { useEffect, useState } from 'react';

// Todo: 모든 NUll -> undefined로 마이그레이션
const initialState: {
  payLoad: any;
  isLoading: boolean;
  Error: Error | null;
} = {
  payLoad: null,
  isLoading: false,
  Error: null,
};

function useFetchData(url: string) {
  const [fetchState, setFetchState] = useState(initialState);
  const [loadMoreUrl, setLoadMoreUrl] = useState('');

  const startFetch = (apiURL: string) => {
    setFetchState({ ...fetchState, isLoading: true });

    fetch(apiURL)
      .then(fetched => fetched.json())
      .then(data =>
        setFetchState({ ...fetchState, payLoad: data, isLoading: false }),
      )
      .catch(err => {
        setFetchState({ ...fetchState, Error: err });
        throw new Error('데이터 통신에러');
      });
  };

  const loadMoreFetch = (apiURL: string) => {
    setFetchState({ ...fetchState, isLoading: true });
    fetch(apiURL)
      .then(fetched => fetched.json())
      .then(newData => {
        setFetchState({
          ...fetchState,
          payLoad: {
            data: {
              list: [...fetchState.payLoad.data.list, ...newData.data.list],
            },
          },
          isLoading: false,
        });
      })
      .catch(err => {
        setFetchState({ ...fetchState, Error: err });
      });
  };

  useEffect(() => {
    startFetch(url);
  }, []);

  useEffect(() => {
    if (loadMoreUrl === '') {
      return;
    }
    loadMoreFetch(loadMoreUrl);
  }, [loadMoreUrl]);

  return { fetchState, setLoadMoreUrl };
}

export default useFetchData;
