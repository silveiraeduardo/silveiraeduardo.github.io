import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Box from '~@system/Box';
import Typography from '~@system/Typography';

import { root, artifact } from './Footer.css';

export type FooterProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Footer: FC<FooterProps> = ({ className, children, ...rest }) => {
  return (
    <Box as="footer" className={clsx(root, className)} {...rest}>
      <Box as="span" className={clsx(artifact)} />
      <Typography variant="small">feito é melhor que perfeito</Typography>
      {children}
    </Box>
  );
};

export default Footer;
