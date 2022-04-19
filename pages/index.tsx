import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '~@templates';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eduardo Silveira • UX designer</title>
        <meta name="description" content="soluções e interfaces que resolvem problemas" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_URL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta name="twitter:title" content="eduardo silveira" />
        <meta name="twitter:description" content="soluções e interfaces que resolvem problemas" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/android-chrome-192x192.png`} />
        <meta name="twitter:creator" content="@oisoudesigner" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="eduardo silveira" />
        <meta property="og:description" content="soluções e interfaces que resolvem problemas" />
        <meta property="og:site_name" content="eduardo silveira" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/apple-touch-icon.png`} />
      </Head>
      <Layout />
    </>
  );
};

export default Home;
