import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '~@templates';
import * as classes from '~@styles/pages/Home.css';
import { ArrowCurveRightIcon, ArrowDownIcon, Timeline } from '~@components';
import clsx from 'clsx';
import { useDesktop } from '~@system';

const Home: NextPage = () => {
  const isDesktop = useDesktop();
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
        <section className={clsx(classes.root, classes.timeLineSection)}>
          {isDesktop && (
            <>
              <ArrowCurveRightIcon className={clsx(classes.arrowCurve)} />
              <ArrowDownIcon className={clsx(classes.arrow)} />
            </>
          )}
          <Timeline />
        </section>
      </Layout>
    </>
  );
};

export default Home;
