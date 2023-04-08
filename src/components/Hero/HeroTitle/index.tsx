import clsx from 'clsx';
import { useMemo, VFC } from 'react';

import Typography from '~@system/Typography';
import { circleContained, circleOutlined, problems, root } from './HeroTitle.css';
import CircleOutlined from '~/svg/circle_outlined.svg';
import CircleContained from '~/svg/circle_contained.svg';

import { useDesktop } from '~@system/utils/useDesktop';
import ArrowIcon from '../../icons/ArrowIcon';

const HeroTitle: VFC = () => {
  const isDesktop = useDesktop();
  const { viewBox, width, height } = useMemo(() => {
    return isDesktop
      ? {
          viewBox: '0 0 91.031 27.578',
          width: '91.031',
          height: '27.578',
        }
      : {
          viewBox: '2 7.5 97 12',
          width: '107px',
          height: '12px',
        };
  }, [isDesktop]);
  return (
    <Typography className={clsx(root)} variant="h1" aria-label="soluções e interfaces que resolvem problemas">
      soluções e <CircleOutlined aria-hidden="true" viewBox="0 0 67 60" className={clsx(circleOutlined)} />{' '}
      <CircleContained aria-hidden="true" className={clsx(circleContained)} viewBox="0 0 108 60" /> <br />
      <ArrowIcon viewBox={viewBox} width={width} height={height} variant="right" hidden="onlyXs" />
      interfaces que
      {isDesktop ? <br /> : null} resolvem <span className={clsx(problems)}>problemas</span>
    </Typography>
  );
};

HeroTitle.displayName = 'HeroTitle';

export default HeroTitle;
