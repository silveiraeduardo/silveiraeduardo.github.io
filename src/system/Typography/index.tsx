import React from 'react';
import clsx from 'clsx';

import Box from '../Box';
import * as classes from './Typography.css';

export type TypographyProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  color?: keyof typeof classes.colors;
  variant?: keyof typeof classes.variants;
};

const Typography: React.FC<TypographyProps> = ({ className, color = 'default', variant = 'p', children, ...rest }) => {
  return (
    <Box
      as={variant}
      aria-label={children?.toString() || rest?.['aria-label']}
      className={clsx(classes.root, classes.colors[color], classes.variants[variant], className)}
      {...rest}
    >
      {children}
    </Box>
  );
};

Typography.displayName = 'Typography';

export default Typography;
