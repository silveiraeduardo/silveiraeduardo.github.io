import clsx from 'clsx';
import { FC } from 'react';
import Icon from '~/svg/keyboard.svg';
import * as classes from './DesignerIcon.css';

export type DesignerIconProps = {
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
};

const DesignerIcon: FC<DesignerIconProps> = ({ className, viewBox = '0 0 24 24', width = '24', height = '24' }) => (
  <Icon className={clsx(classes.root, className)} width={width} height={height} viewBox={viewBox} />
);

export default DesignerIcon;
