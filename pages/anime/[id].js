import { useRouter } from 'next/router';

import {
  CustomHead,
  Header,
  Layout,
} from '../../components';

function Anime() {
  const router = useRouter();
  const { id } = router.query;

  const data = [
    "aaaaa",
    "bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb bbbbbbbbbbb bbbb "
  ];

  return (
    <Layout>
      <CustomHead title={id} />
      <Header />

      <div className="flex">
        <div className="w-56 md:w-64 bg-pink-500">{data[0]}</div>
        <div className="flex-1 bg-blue-500">{data[1]}</div>
      </div>
    </Layout>
  );
}

export default Anime;