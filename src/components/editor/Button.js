import React from 'react'
import { cx, css } from '@emotion/css'

const Button = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
            ? 'black'
            : '#ccc'};
        `,
      )}
    />
  ),
)

Button.displayName = 'Button'

export default Button
