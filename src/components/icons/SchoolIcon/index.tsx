import clsx from 'clsx';
import { FC } from 'react';
import Icon from '~/svg/school.svg';
import * as classes from './SchoolIcon.css';

export type SchoolIconProps = {
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
};

const SchoolIcon: FC<SchoolIconProps> = ({ className, viewBox = '0 0 24 24', width = '24', height = '24' }) => (
  <Icon className={clsx(classes.root, className)} width={width} height={height} viewBox={viewBox} />
);

export default SchoolIcon;
