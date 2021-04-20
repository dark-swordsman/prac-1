import { useRouter } from 'next/router';

import {
  CustomHead,
  Header,
  Layout,
} from '../../components';

function Anime() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <CustomHead title={id} />
      <Header />

      {id}
    </Layout>
  );
}

export default Anime;