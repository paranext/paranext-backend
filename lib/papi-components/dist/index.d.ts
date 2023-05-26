// Generated by dts-bundle-generator v7.2.0

import { AutocompleteChangeDetails, AutocompleteChangeReason } from '@mui/material';
import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  PropsWithChildren,
  SyntheticEvent,
} from 'react';

export type ButtonProps = PropsWithChildren<{
  /**
   * Enabled status of button
   * @default false
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
 * Button a user can click to do something
 *
 * Thanks to MUI for heavy inspiration and documentation
 * https://mui.com/material-ui/getting-started/overview/
 */
export declare function Button({
  isDisabled,
  className,
  onClick,
  onContextMenu,
  children,
}: ButtonProps): JSX.Element;
declare enum LabelPosition {
  After = 'after',
  Before = 'before',
  Above = 'above',
  Below = 'below',
}
export type CheckboxProps = {
  /**
   * If `true`, the component is checked.
   */
  isChecked?: boolean;
  /**
   * If specified, the label that will appear associated with the checkbox.
   * @default '' (no label will be shown)
   */
  labelText?: string;
  /**
   * Indicates the position of the label relative to the checkbox.
   * @default 'after'
   */
  labelPosition?: LabelPosition;
  /**
   * If `true`, the component is in the indeterminate state.
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * If `true`, the component is checked by default.
   * @default false
   */
  isDefaultChecked?: boolean;
  /**
   * Enabled status of switch
   * @default false
   */
  isDisabled?: boolean;
  /**
   * True when (input related to) switch is erroneous
   * @default false
   */
  hasError?: boolean;
  /**
   * Additional css classes to help with unique styling of the switch
   */
  className?: string;
  /**
   * Callback fired when the state is changed.
   * @param event The event source of the callback. You can pull out the new value by accessing event.target.value (string).
   * You can pull out the new checked state by accessing event.target.checked (boolean).
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
/**
 * Primary UI component for user interaction
 */
export declare function Checkbox({
  isChecked,
  labelText,
  labelPosition,
  isIndeterminate,
  isDefaultChecked,
  isDisabled,
  hasError,
  className,
  onChange,
}: CheckboxProps): JSX.Element;
export type ComboBoxChangeDetails<T = string> = AutocompleteChangeDetails<T>;
export type ComboBoxChangeReason = AutocompleteChangeReason;
export type ComboBoxProps = {
  /**
   * Text label title for combobox
   */
  title?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true`, the component can be cleared, and will have a button to do so
   * @default true
   */
  isClearable?: boolean;
  /**
   * True when (input related to) switch is erroneous
   * @default false
   */
  hasError?: boolean;
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  isFullWidth?: boolean;
  /**
   * Width of the combobox in pixels. Setting this prop overrides the `isFullWidth` prop
   */
  width?: number;
  /**
   * List of available options for the dropdown menu
   */
  options?: readonly (
    | string
    | {
        label: string;
      }
  )[];
  /**
   * Additional css classes to help with unique styling of the combo box
   */
  className?: string;
  /**
   * The selected value that the combo box currently holds
   */
  value?: string;
  /**
   * Triggers when content of textfield is changed
   */
  onChange?: (
    event: SyntheticEvent<Element, Event>,
    value: unknown,
    reason?: ComboBoxChangeReason,
    details?: ComboBoxChangeDetails<unknown> | undefined,
  ) => void;
  /**
   * Triggers when textfield gets focus
   */
  onFocus?: FocusEventHandler<HTMLDivElement>;
  /**
   * Triggers when textfield loses focus
   */
  onBlur?: FocusEventHandler<HTMLDivElement>;
};
/**
 * Dropdown selector displaying various options from which to choose
 *
 * Thanks to MUI for heavy inspiration and documentation
 * https://mui.com/material-ui/getting-started/overview/
 */
export declare function ComboBox({
  title,
  isDisabled,
  isClearable,
  hasError,
  isFullWidth,
  width,
  options,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
}: ComboBoxProps): JSX.Element;
export type SliderProps = {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min?: number;
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max?: number;
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   * @default 1
   */
  step?: number;
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * @default false
   */
  showMarks?: boolean;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: number;
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay?: 'on' | 'auto' | 'off';
  /**
   * Additional css classes to help with unique styling of the button
   */
  className?: string;
  /**
   * Callback function that is fired when the slider's value changed.
   * @param event The event source of the callback. You can pull out the new value by accessing event.target.value (any).
   * Warning: This is a generic event not a change event.
   * @param value The new value.
   * @param activeThumb Index of the currently moved thumb.
   */
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
  /**
   * Callback function that is fired when the mouseup is triggered.
   * @param event The event source of the callback. Warning: This is a generic event not a change event.
   * @param value The new value.
   */
  onChangeCommitted?: (
    event: Event | SyntheticEvent<Element, Event>,
    value: number | number[],
  ) => void;
};
/**
 * Slider that allows selecting a value from a range
 *
 * Thanks to MUI for heavy inspiration and documentation
 * https://mui.com/material-ui/getting-started/overview/
 */
export declare function Slider({
  isDisabled,
  orientation,
  min,
  max,
  step,
  showMarks,
  defaultValue,
  valueLabelDisplay,
  className,
  onChange,
  onChangeCommitted,
}: SliderProps): JSX.Element;
export type SwitchProps = {
  /**
   * If `true`, the component is checked.
   */
  isChecked?: boolean;
  /**
   * Enabled status of switch
   * @default false
   */
  isDisabled?: boolean;
  /**
   * True when (input related to) switch is erroneous
   * @default false
   */
  hasError?: boolean;
  /**
   * Additional css classes to help with unique styling of the switch
   */
  className?: string;
  /**
   * Callback fired when the state is changed.
   * @param event The event source of the callback. You can pull out the new value by accessing event.target.value (string).
   * You can pull out the new checked state by accessing event.target.checked (boolean).
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
/**
 * Switch to toggle on and off
 *
 * Thanks to MUI for heavy inspiration and documentation
 * https://mui.com/material-ui/getting-started/overview/
 */
export declare function Switch({
  isChecked: checked,
  isDisabled,
  hasError,
  className,
  onChange,
}: SwitchProps): JSX.Element;
export type TextFieldProps = {
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: 'outlined' | 'filled';
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  hasError?: boolean;
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  isFullWidth?: boolean;
  /**
   * Text that gives the user instructions on what contents the TextField expects
   */
  helperText?: string;
  /**
   * The title of the TextField
   */
  label?: string;
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  isRequired?: boolean;
  /**
   * Additional css classes to help with unique styling of the button
   */
  className?: string;
  /**
   * Starting value for the text field if it is not controlled
   */
  defaultValue?: unknown;
  /**
   * Value of the text field if controlled
   */
  value?: unknown;
  /**
   * Triggers when content of textfield is changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Triggers when textfield gets focus
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;
  /**
   * Triggers when textfield loses focus
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;
};
/**
 * Text input field
 *
 * Thanks to MUI for heavy inspiration and documentation
 * https://mui.com/material-ui/getting-started/overview/
 */
export declare function TextField({
  variant,
  isDisabled,
  hasError,
  isFullWidth,
  helperText,
  label,
  placeholder,
  isRequired,
  className,
  defaultValue,
  value,
  onChange,
  onFocus,
  onBlur,
}: TextFieldProps): JSX.Element;
export interface ScriptureReference {
  book: number;
  chapter: number;
  verse: number;
}
export interface ScrRefSelectorProps {
  scrRef: ScriptureReference;
  handleSubmit: (scrRef: ScriptureReference) => void;
}
export declare function RefSelector({ scrRef, handleSubmit }: ScrRefSelectorProps): JSX.Element;
/** All React components to be exposed on the papi */
export declare const papiComponents: {
  Button: typeof Button;
  Checkbox: typeof Checkbox;
  ComboBox: typeof ComboBox;
  Slider: typeof Slider;
  Switch: typeof Switch;
  TextField: typeof TextField;
};
export type PapiComponents = typeof papiComponents;

export {};
