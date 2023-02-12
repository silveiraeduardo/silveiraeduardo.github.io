import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '~@templates';
import * as classes from './Home/Home.css';
import ArrowIcon from '~@components/icons/ArrowIcon';
import { Timeline } from '~@components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eduardo Silveira • UX designer</title>
        <meta name="description" content="Soluções e interfaces que resolvem problemas, focados em UX design." />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_URL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta name="twitter:title" content="eduardo silveira" />
        <meta
          name="twitter:description"
          content="Soluções e interfaces que resolvem problemas, focados em UX design."
        />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/android-chrome-192x192.png`} />
        <meta name="twitter:creator" content="@oisoudesigner" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="eduardo silveira" />
        <meta property="og:description" content="Soluções e interfaces que resolvem problemas, focados em UX design." />
        <meta property="og:site_name" content="eduardo silveira" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/apple-touch-icon.png`} />
      </Head>
      <Layout>
        <section className={classes.root}>
          {/* <div className={classes.background}>
            <Image src="/images/Eduardo_Silveira_tragetoria.png" width={1497} height={380} alt="Tragetória" />
          </div>
          <ArrowIcon
            className={classes.arrowDown}
            variant="down"
            width="35px"
            height="35px"
            viewBox="0 0 91.031 91.031"
          /> */}
          <Timeline />
        </section>
      </Layout>
    </>
  );
};

export default Home;
