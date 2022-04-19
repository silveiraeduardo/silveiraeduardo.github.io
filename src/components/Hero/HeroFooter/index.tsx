import clsx from 'clsx';
import Box from '~@system/Box';
import ArrowIcon from '../../ArrowIcon';
import { root, arrowDown, divider, text } from './HeroFooter.css';

const HeroFooter = () => {
  return (
    <Box className={clsx(root)}>
      <ArrowIcon className={clsx(arrowDown)} variant="down" width="35px" height="35px" viewBox="0 0 91.031 91.031" />
      <hr className={clsx(divider)} />
      <a href="mailto:eduardo.silveira@aol.com" className={clsx(text)}>
        eduardo.silveira@aol.com
      </a>
    </Box>
  );
};

export default HeroFooter;
