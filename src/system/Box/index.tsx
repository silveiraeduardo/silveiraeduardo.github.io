/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import type * as Polymorphic from '../Polymorphic';

type PolymorphicBox = Polymorphic.ForwardRefComponent<'div', {}>;

// eslint-disable-next-line react/prop-types
const Box = React.forwardRef(({ as: Component = 'div', ...props }, forwardedRef) => (
  <Component {...props} ref={forwardedRef} />
)) as PolymorphicBox;

Box.displayName = 'Box';

export default Box;
