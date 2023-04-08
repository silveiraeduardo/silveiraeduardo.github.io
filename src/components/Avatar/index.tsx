import clsx from 'clsx';
import Image from 'next/image';
import { memo } from 'react';
import Box from '~@system/Box';
import Typography from '~@system/Typography';
import { imageContainer, image, root, textContainer, text } from './Avatar.css';

export type AvatarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  src: string;
  width: number;
  height: number;
};

const Avatar: React.FC<AvatarProps> = ({ width, height, src, className, children, ...rest }) => {
  return (
    <Box as="span" className={clsx(root, className)} {...rest}>
      <Box as="span" className={clsx(imageContainer)}>
        <Image className={clsx(image)} width={width} height={height} src={src} alt={String(children?.toString())} />{' '}
      </Box>
      <Box as="span" className={clsx(textContainer)}>
        <Typography className={clsx(text)}>{children}</Typography>
      </Box>
    </Box>
  );
};

Avatar.displayName = 'Avatar';

export default memo(Avatar);
