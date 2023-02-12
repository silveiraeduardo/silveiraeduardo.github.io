import clsx from 'clsx';
import Box from '~@system/Box';
// import ArrowIcon from '../../icons/ArrowIcon';
import { root } from './HeroFooter.css';
import React from 'react';
import HeroLinkedIn from '../HeroLinkedIn';

function HeroFooter() {
  return (
    <Box className={clsx(root)}>
      <HeroLinkedIn />
      {/* <ArrowIcon className={clsx(arrowDown)} variant="down" width="35px" height="35px" viewBox="0 0 91.031 91.031" /> */}
      {/* <hr className={clsx(divider)} /> */}
      {/* <a href="mailto:eduardo.silveira@aol.com" className={clsx(text)}>
        eduardo.silveira@aol.com
      </a> */}
    </Box>
  );
}

export default HeroFooter;
