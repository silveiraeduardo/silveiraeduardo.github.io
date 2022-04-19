import { useMemo } from 'react';
import Icon from '~/svg/silveira.svg';
import { useDesktop } from '~@system/utils/useDesktop';

const SilveiraIcon = () => {
  const isDesktop = useDesktop();
  const { width, height } = useMemo(() => {
    return isDesktop
      ? {
          width: '30px',
          height: '31px',
        }
      : {
          width: '20px',
          height: '21px',
        };
  }, [isDesktop]);
  return <Icon width={width} height={height} viewBox="0 0 30.207 30.894" />;
};

export default SilveiraIcon;
