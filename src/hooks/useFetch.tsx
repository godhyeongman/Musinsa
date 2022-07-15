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

  useEffect(() => {
    startFetch(url);
  }, []);

  return fetchState;
}

export default useFetchData;

// Todo: 버그 발생 PayLoad 변경안됨
// const startFetch = async (apiURL: string) => {
//     setFetchState({ ...fetchState, isLoading: true });
//     try {
//       const data = await fetch(apiURL);
//       const JSONData = await data.json();
//       setFetchState({ ...fetchState, payLoad: JSONData });
//     } catch {
//       setFetchState({ ...fetchState, isError: true });
//       throw new Error('데이터 통신에러');
//     } finally {
//       setFetchState({ ...fetchState, isLoading: false });
//     }
//   };
