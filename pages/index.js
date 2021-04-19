import Head from 'next/head'

import { 
  Header,
  Layout,
} from '../components';

function Home() {
  return (
    <Layout>
      <Head>
        <title>Some Anime List Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </Layout>
  );
}

export default Home;