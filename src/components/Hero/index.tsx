import clsx from 'clsx';
import { VFC } from 'react';
import Box from '~@system/Box';
import { root } from './Hero.css';
import HeroArticle from './HeroArticle';
import HeroCTA from './HeroCTA';
import HeroFooter from './HeroFooter';
import HeroTitle from './HeroTitle';
import HeroLinkedIn from './HeroLinkedIn';

const Hero: VFC = () => {
  return (
    <Box as="main" className={clsx(root)} role="main">
      <HeroTitle />
      <HeroCTA />
      <HeroArticle />
      <HeroFooter />
    </Box>
  );
};

export { HeroArticle, HeroCTA, HeroTitle, HeroFooter, HeroLinkedIn };
export default Hero;
