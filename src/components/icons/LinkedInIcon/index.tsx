import { useMemo } from 'react';
import Icon from '~/svg/eduardosilveira_linkedin.svg';
import { useDesktop } from '~@system/utils/useDesktop';
import * as classes from './LinkedInIcon.css';
import clsx from 'clsx';

const LinkedInIcon = () => {
  const isDesktop = useDesktop();
  const { width, height } = useMemo(() => {
    return isDesktop
      ? {
          width: '30px',
          height: '30px',
        }
      : {
          width: '24px',
          height: '24px',
        };
  }, [isDesktop]);
  return <Icon className={clsx(classes.icon)} width={width} height={height} viewBox="0 0 30.207 30.894" />;
};

export default LinkedInIcon;
