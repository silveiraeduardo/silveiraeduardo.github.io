import clsx from 'clsx';
import { FC } from 'react';
import Arrow from '~/svg/arrow_right.svg';
import { hidden as hiddenClasses, root, variants as variantClasses } from './ArrowIcon.css';

export type ArrowIconProps = {
  className?: string;
  variant?: keyof typeof variantClasses;
  hidden?: keyof typeof hiddenClasses;
  viewBox?: string;
  width?: string;
  height?: string;
};

const ArrowIcon: FC<ArrowIconProps> = ({
  className,
  variant = 'right',
  hidden = 'none',
  viewBox = '0 0 91.031 27.578',
  width = '91.031',
  height = '27.578',
}) => {
  return (
    <Arrow
      className={clsx(root, variantClasses[variant], hiddenClasses[hidden], className)}
      width={width}
      height={height}
      viewBox={viewBox}
    />
  );
};

export default ArrowIcon;
