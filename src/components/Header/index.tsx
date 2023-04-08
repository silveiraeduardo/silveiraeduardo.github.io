import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from 'react';
import Box from '~@system/Box';
import { useDesktop } from '~@system/utils/useDesktop';
import { useMatchMedia } from '~@system/utils/useMatchMedia';
import Avatar, { AvatarProps } from '../Avatar';
import { root } from './Header.css';
import SilveiraIcon from '../icons/SilveiraIcon';

export type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  const isDarkMode = useMatchMedia('(prefers-color-scheme: dark)');
  const isDesktop = useDesktop();
  const avatarProps = useMemo<AvatarProps>(() => {
    return {
      src: isDarkMode ? '/images/Eduardo_Silveira.png' : '/images/Eduardo_Silveira--lightmode.png',
      width: isDesktop ? 50 : 34,
      height: isDesktop ? 50 : 34,
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
