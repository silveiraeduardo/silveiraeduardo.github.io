import clsx from 'clsx';
import React, { memo } from 'react';
import Footer from '~@components/Footer';
import Header from '~@components/Header';
import Hero from '~@components/Hero';
import Typography from '~@system/Typography';
import * as classes from './Layout.css';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <Hero />
      <>{children}</>
      <Footer className={clsx(classes.footerContainer)}>
        <Typography className={clsx(classes.footerContainerText)} variant="small">
          eduardo silveira © 2023
        </Typography>
      </Footer>
    </>
  );
}

export default memo(Layout);
