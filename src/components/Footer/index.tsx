import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Box from '~@system/Box';

import { root } from './Footer.css';

export type FooterProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

function Footer({ className, children, ...rest }: FooterProps) {
  return (
    <Box as="footer" className={clsx(root, className)} {...rest}>
      {children}
    </Box>
  );
}

export default Footer;
