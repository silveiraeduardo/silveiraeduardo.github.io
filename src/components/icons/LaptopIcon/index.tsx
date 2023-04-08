import clsx from 'clsx';
import { FC } from 'react';
import Icon from '~/svg/laptop.svg';
import * as classes from './LaptopIcon.css';

export type LaptopIconProps = {
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
};

const LaptopIcon: FC<LaptopIconProps> = ({ className, viewBox = '0 0 24 24', width = '24', height = '24' }) => (
  <Icon className={clsx(classes.root, className)} width={width} height={height} viewBox={viewBox} />
);

export default LaptopIcon;
