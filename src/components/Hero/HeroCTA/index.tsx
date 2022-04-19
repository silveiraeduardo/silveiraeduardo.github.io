import clsx from 'clsx';
import { useMemo, VFC } from 'react';
import Box from '~@system/Box';
import ArrowCurve from '~/svg/arrow_curve.svg';
import { root, arrowCurve, buttonLink } from './HeroCTA.css';
import { useDesktop } from '~@system/utils/useDesktop';

const HeroCTA: VFC = () => {
  const isDesktop = useDesktop();
  const { width, height } = useMemo(() => {
    return isDesktop
      ? {
          width: '53px',
          height: '48px',
        }
      : {
          width: '38px',
          height: '35px',
        };
  }, [isDesktop]);
  return (
    <Box as="div" className={clsx(root)}>
      <a href="mailto:eduardo.silveira@aol.com" className={clsx(buttonLink)} aria-label="vamos conversar?" role="link">
        vamos conversar?
      </a>
      <ArrowCurve
        aria-hidden="true"
        className={clsx(arrowCurve)}
        width={width}
        height={height}
        viewBox="0 0 54.6 48.984"
      />
    </Box>
  );
};

export default HeroCTA;
