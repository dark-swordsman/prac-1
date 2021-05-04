import { useState, useEffect } from 'react';
import useSWR from 'swr';

import {
  CustomHead,
  Header,
  Layout,
} from "../components";

function Search() {
  const [sortDirection, setSortDirection] = useState("ASC");
  const [anime, setAnime] = useState(null);
  const [sorted, setSorted] = useState(null);
  const { data, error } = useSWR(`/api/anime`);

  useEffect(() => {
    if (data && data.anime) setAnime(data.anime);
  }, [data]);

  useEffect(() => {
    if (anime) {
      const unsorted = [...anime];
      unsorted.sort((a, b) => {
        if (a.name < b.name) return (sortDirection === "ASC") ? -1 : 1;
        if (a.name > b.name) return (sortDirection === "ASC") ? 1 : -1;
        return 0;
      });

      setSorted(unsorted);
    }
  }, [anime, sortDirection]);
  
  if (error) return <div>failed</div>;
  if (!data) return <div>loading...</div>;
  if (!anime) return <div>no results</div>;

  return (
    <Layout>
      <CustomHead title="Search" />
      <Header />
      {/* 
        table header + search bar/filters
        table

      */}

      <button onClick={() => setSortDirection(sortDirection === "ASC" ? "DESC" : "ASC")}>press me</button>

      {sorted && sorted.map((anime, i) => <div key={`${anime.name}-${i}`}>{anime.name}</div>)}

    </Layout>
  )
}

export default Search;