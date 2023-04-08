import clsx from 'clsx';
import { FC } from 'react';
import ArrowCurveRight from '~/svg/arrow_curve_right.svg';
import { hidden as hiddenClasses, root, variants as variantClasses } from './ArrowCurveRightIcon.css';

export type ArrowCurveRightIconProps = {
  className?: string;
  variant?: keyof typeof variantClasses;
  hidden?: keyof typeof hiddenClasses;
  viewBox?: string;
  width?: string;
  height?: string;
};

const ArrowCurveRightIcon: FC<ArrowCurveRightIconProps> = ({
  className,
  variant = 'right',
  hidden = 'none',
  viewBox = '0 0 54.6 48.984',
  width = '54.6',
  height = '48.984',
}) => {
  return (
    <ArrowCurveRight
      className={clsx(root, variantClasses[variant], hiddenClasses[hidden], className)}
      width={width}
      height={height}
      viewBox={viewBox}
    />
  );
};

export default ArrowCurveRightIcon;
