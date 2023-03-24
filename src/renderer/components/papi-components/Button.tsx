import { Button as MuiButton } from '@mui/material';
import { MouseEventHandler, PropsWithChildren } from 'react';
import '@renderer/components/papi-components/button.css';

type ButtonProps = PropsWithChildren<{
  /**
   * Indicates if this is the principal call to action on the page
   * @default false
   */
  isPrimary?: boolean;
  /**
   * Enabled status of button
   */
  isDisabled?: boolean;
  /**
   * Additional css classes to help with unique styling of the button
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Optional context menu handler
   */
  onContextMenu?: MouseEventHandler<HTMLButtonElement>;
}>;

/**
 * Primary UI component for user interaction
 */
function Button({
  isPrimary = false,
  isDisabled: disabled,
  className,
  onClick,
  onContextMenu,
  children,
}: ButtonProps) {
  return (
    <MuiButton
      disabled={disabled}
      className={`papi-button ${isPrimary ? 'primary' : 'secondary'} ${
        className ?? ''
      }`}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
