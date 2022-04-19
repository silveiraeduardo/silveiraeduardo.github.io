import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from 'react';
import Box from '~@system/Box';
import { useDesktop } from '~@system/utils/useDesktop';
import { useMatchMedia } from '~@system/utils/useMatchMedia';
import Avatar, { AvatarProps } from '../Avatar';
import eduDark from '~/images/Eduardo Silveira.png';
import eduLight from '~/images/Eduardo Silveira lightmode.png';
import { root } from './Header.css';
import SilveiraIcon from '../SilveiraIcon';

export type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  const isDarkMode = useMatchMedia('(prefers-color-scheme: dark)');
  const isDesktop = useDesktop();
  const avatarProps = useMemo<AvatarProps>(() => {
    return {
      src: isDarkMode ? eduDark.src : eduLight.src,
      width: isDesktop ? '50px' : '34px',
      height: isDesktop ? '50px' : '34px',
    } as AvatarProps;
  }, [isDarkMode, isDesktop]);
  return (
    <Box as="header" className={clsx(root, className)} {...rest}>
      <Avatar {...avatarProps}>eduardo silveira</Avatar>
      <SilveiraIcon />
    </Box>
  );
};

export default Header;
