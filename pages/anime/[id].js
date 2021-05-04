import { useRouter } from "next/router";
import useSWR from 'swr';

import {
  CustomHead,
  Header,
  Layout,
} from "../../components";

function Image(anime) {
  if (!anime) {
    return "loading...";
  } else {
    return <img src={anime.image} />
  }
}

function MainBody(anime) {

}

function Anime() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR("/api/anime");
  if (error) console.error(error);
  const anime = !data ? null : data.anime[id];

  return (
    <Layout>
      <CustomHead title={anime ? anime.name : "loading..."} />
      <Header />

      <div className="flex mt-8">
        <div className="w-56 md:w-64">
          {Image(anime)}
        </div>
        <div className="flex-1">
          {MainBody(anime)}
        </div>
      </div>
    </Layout>
  );
}

export default Anime;