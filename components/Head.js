import Head from 'next/head';

function CustomHead({ title }) {
  return (
    <Head>
      <title>{title} - UnnamedAnimeList</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default CustomHead;