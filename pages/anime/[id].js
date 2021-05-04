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
  if (!anime) {
    return "loading...";
  } else {
    return (
      <div className="px-0">
        <div className="h-24 px-4 pt-2 bg-blue-800 bg-opacity-25">
          <div className="flex justify-between">
            <h1 className="text-3xl">{anime.name}</h1>
            <h1 className="text-4xl">7.69</h1>
          </div>
        </div>
        <div className="h-min-72 p-4 whitespace-pre-line">
          {`Cupcake ipsum dolor sit. Amet jelly beans lollipop gingerbread. Fruitcake topping carrot cake tiramisu chupa chups dragée. Ice cream cheesecake I love.\n
          Marzipan sugar plum bonbon marzipan jujubes jujubes biscuit pudding donut. Apple pie powder lemon drops powder. Apple pie cupcake soufflé.\n
          Jujubes sugar plum carrot cake icing sweet muffin. Sesame snaps jelly beans donut I love soufflé marshmallow powder carrot cake. Marshmallow gummies chocolate toffee gummi bears.
          Dragée dragée cake cheesecake cake. Brownie sugar plum candy jelly. Cookie bonbon pie candy fruitcake cake chocolate bar. Candy canes liquorice powder.
          Pastry cake sweet roll sugar plum. Pie sesame snaps I love lollipop jelly muffin cotton candy ice cream I love. I love chocolate cake cake wafer cookie marshmallow. Carrot cake ice cream caramels wafer pastry gummies sweet roll.`}
        </div>
      </div>
    );
  }
}

function Anime() {
  const router = useRouter();
  const { id } = router.query;
  // refactor in future to use SSR (create interface methods like an API I guess???)
  const { data, error } = useSWR("/api/anime");
  if (error) console.error(error);
  const anime = !data ? null : data.anime[id];

  return (
    <Layout>
      <CustomHead title={anime ? anime.name : "loading..."} />
      <Header />

      <div className="flex mt-8">
        <div className="w-56 md:w-64 bg-pink-600">
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