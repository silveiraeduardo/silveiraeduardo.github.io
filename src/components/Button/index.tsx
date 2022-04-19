import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import Box from '~@system/Box';
import * as classes from './Button.css';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: keyof typeof classes.variants;
};

const Button: FC<ButtonProps> = ({ className, type = 'button', children, variant = 'outlined', ...rest }) => {
  return (
    <Box as="button" type={type} className={clsx(classes.root, classes.variants[variant], className)} {...rest}>
      {children}
    </Box>
  );
};

Button.displayName = 'Button';

export default Button;
