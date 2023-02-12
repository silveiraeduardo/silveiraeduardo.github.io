import clsx from 'clsx';
import { FC } from 'react';
import Icon from '~/svg/history.svg';
import * as classes from './HistoryIcon.css';

export type HistoryIconProps = {
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
};

const HistoryIcon: FC<HistoryIconProps> = ({ className, viewBox = '0 0 24 24', width = '24', height = '24' }) => (
  <Icon className={clsx(classes.root, className)} width={width} height={height} viewBox={viewBox} />
);

export default HistoryIcon;
