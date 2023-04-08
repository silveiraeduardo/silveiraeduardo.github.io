import clsx from 'clsx';
import { FC } from 'react';
import ArrowDown from '~/svg/arrow_down.svg';
import { hidden as hiddenClasses, root, variants as variantClasses } from './ArrowDownIcon.css';

export type ArrowDownIconProps = {
  className?: string;
  variant?: keyof typeof variantClasses;
  hidden?: keyof typeof hiddenClasses;
  viewBox?: string;
  width?: string;
  height?: string;
};

const ArrowDownIcon: FC<ArrowDownIconProps> = ({
  className,
  variant = 'down',
  hidden = 'none',
  viewBox = '0 0 14.5 35.531',
  width = '14.5',
  height = '35.531',
}) => {
  return (
    <ArrowDown
      className={clsx(root, variantClasses[variant], hiddenClasses[hidden], className)}
      width={width}
      height={height}
      viewBox={viewBox}
    />
  );
};

export default ArrowDownIcon;
