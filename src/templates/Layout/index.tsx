import { FC, memo } from 'react';
import Footer from '~@components/Footer';
import Header from '~@components/Header';
import Hero from '~@components/Hero';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Hero />
      <>{children}</>
      <Footer />
    </>
  );
};

export default memo(Layout);
