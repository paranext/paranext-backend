// Generated by dts-bundle-generator v8.0.1

import { AutocompleteChangeDetails, AutocompleteChangeReason, AutocompleteValue, SnackbarCloseReason, SnackbarOrigin } from '@mui/material';
import { ChangeEvent, ChangeEventHandler, FocusEventHandler, Key, MouseEventHandler, PropsWithChildren, ReactElement, ReactNode, SyntheticEvent, UIEvent } from 'react';
import { CellClickArgs, CellKeyDownArgs, CellKeyboardEvent, CellMouseEvent, CopyEvent, PasteEvent, RenderCellProps, RowsChangeData, SortColumn } from 'react-data-grid';

export type ButtonProps = PropsWithChildren<{
	/**
	 *  Optional unique identifier
	 */
	id?: string;
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
export declare function Button({ id, isDisabled, className, onClick, onContextMenu, children, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export declare enum LabelPosition {
	After = "after",
	Before = "before",
	Above = "above",
	Below = "below"
}
export type CheckboxProps = {
	/**
	 *  Optional unique identifier
	 */
	id?: string;
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
export declare function Checkbox({ id, isChecked, labelText, labelPosition, isIndeterminate, isDefaultChecked, isDisabled, hasError, className, onChange, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export type ComboBoxLabelOption = {
	label: string;
};
export type ComboBoxOption = string | ComboBoxLabelOption;
export type ComboBoxValue<T, X, Y, Z> = AutocompleteValue<T, X, Y, Z>;
export type ComboBoxChangeDetails<T> = AutocompleteChangeDetails<T>;
export type ComboBoxChangeReason = AutocompleteChangeReason;
export type ComboBoxProps<T> = {
	/**
	 *  Optional unique identifier
	 */
	id?: string;
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
	options?: readonly T[];
	/**
	 * Additional css classes to help with unique styling of the combo box
	 */
	className?: string;
	/**
	 * The selected value that the combo box currently holds
	 */
	value?: T;
	/**
	 * Triggers when content of textfield is changed
	 */
	onChange?: (event: SyntheticEvent<Element, Event>, value: ComboBoxValue<T, boolean | undefined, boolean | undefined, boolean | undefined>, reason?: ComboBoxChangeReason, details?: ComboBoxChangeDetails<T> | undefined) => void;
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
export declare function ComboBox<T extends ComboBoxOption = ComboBoxOption>({ id, title, isDisabled, isClearable, hasError, isFullWidth, width, options, className, value, onChange, onFocus, onBlur, }: ComboBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export type Command = {
	/**
	 * Text (displayable in the UI) as the name of the command
	 */
	name: string;
	/**
	 * Command to execute (string.string)
	 */
	command: string;
};
export interface CommandHandler {
	(command: Command): void;
}
export type MenuItemProps = Omit<MenuItemInfo, "command"> & PropsWithChildren<{
	/**
	 *  Optional unique identifier
	 */
	id?: string;
	onClick: () => void;
}>;
export type MenuItemInfo = Command & {
	/**
	 * If true, list item is focused during the first mount
	 * @default false
	 */
	hasAutoFocus?: boolean;
	/**
	 * Additional css classes to help with unique styling of the button
	 */
	className?: string;
	/**
	 * If true, compact vertical padding designed for keyboard and mouse
	 * input is used.
	 * @default true
	 */
	isDense?: boolean;
	/**
	 * If true, the left and right padding is removed
	 * @default false
	 */
	hasDisabledGutters?: boolean;
	/**
	 * If true, a 1px light border is added to bottom of menu item
	 * @default false
	 */
	hasDivider?: boolean;
	/**
	 * Help identify which element has keyboard focus
	 */
	focusVisibleClassName?: string;
};
export declare function MenuItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
type MenuColumnInfo = {
	/**
	 * The name of the menu (displayed as the column header).
	 */
	name: string;
	items: MenuItemInfo[];
};
export type GridMenuInfo = {
	/**
	 * The columns to display on the dropdown menu.
	 */
	columns: MenuColumnInfo[];
};
export type GridMenuProps = GridMenuInfo & {
	/**
	 *  Optional unique identifier
	 */
	id?: string;
	commandHandler: CommandHandler;
	/**
	 * Additional css classes to help with unique styling of the toolbar
	 */
	className?: string;
};
export function GridMenu({ commandHandler, className, columns, id }: GridMenuProps): import("react/jsx-runtime").JSX.Element;
export type IconButtonProps = PropsWithChildren<{
	/**
	 * Optional unique identifier
	 */
	id?: string;
	/**
	 * Required. Used as both the tooltip (aka, title) and the aria-label (used for accessibility,
	 * testing, etc.), unless a distinct tooltip is supplied.
	 */
	label: string;
	/**
	 * Enabled status of button
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * Optional tooltip to display if different from the aria-label.
	 */
	tooltip?: string;
	/**
	 * If true, no tooltip will be displayed.
	 */
	isTooltipSuppressed?: boolean;
	/**
	 * If true, the keyboard focus ripple is disabled.
	 * @default false
	 */
	isFocusRippleDisabled?: boolean;
	/**
	 * If given, uses a negative margin to counteract the padding on one side (this is often helpful
	 * for aligning the left or right side of the icon with content above or below, without ruining
	 * the border size and shape).
	 * @default false
	 */
	adjustMarginToAlignToEdge?: "end" | "start" | false;
	/**
	 * The size of the component. small is equivalent to the dense button styling.
	 * @default false
	 */
	size: "small" | "medium" | "large";
	/**
	 * Additional css classes to help with unique styling of the button
	 */
	className?: string;
	/**
	 * Optional click handler
	 */
	onClick?: MouseEventHandler<HTMLButtonElement>;
}>;
/**
 * Iconic button a user can click to do something
 *
 * Thanks to MUI for heavy inspiration and documentation
 * https://mui.com/material-ui/getting-started/overview/
 */
export declare function IconButton({ id, label, isDisabled, tooltip, isTooltipSuppressed, isFocusRippleDisabled, adjustMarginToAlignToEdge, size, className, onClick, children, }: IconButtonProps): import("react/jsx-runtime").JSX.Element;
export interface ScriptureReference {
	bookNum: number;
	chapterNum: number;
	verseNum: number;
}
export interface ScrRefSelectorProps {
	scrRef: ScriptureReference;
	handleSubmit: (scrRef: ScriptureReference) => void;
	id?: string;
}
export declare function RefSelector({ scrRef, handleSubmit, id }: ScrRefSelectorProps): import("react/jsx-runtime").JSX.Element;
export type SliderProps = {
	/**
	 *  Optional unique identifier
	 */
	id?: string;
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * The component orientation.
	 * @default 'horizontal'
	 */
	orientation?: "horizontal" | "vertical";
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
	 * The value of the slider.
	 * For ranged sliders, provide an array with two values.
	 */
	value?: number | number[];
	/**
	 * Controls when the value label is displayed:
	 *
	 * - `auto` the value label will display when the thumb is hovered or focused.
	 * - `on` will display persistently.
	 * - `off` will never display.
	 * @default 'off'
	 */
	valueLabelDisplay?: "on" | "auto" | "off";
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
	onChangeCommitted?: (event: Event | SyntheticEvent<Element, Event>, value: number | number[]) => void;
};
/**
 * Slider that allows selecting a value from a range
 *
 * Thanks to MUI for heavy inspiration and documentation
 * https://mui.com/material-ui/getting-started/overview/
 */
export declare function Slider({ id, isDisabled, orientation, min, max, step, showMarks, defaultValue, value, valueLabelDisplay, className, onChange, onChangeCommitted, }: SliderProps): import("react/jsx-runtime").JSX.Element;
export type CloseReason = SnackbarCloseReason;
export type AnchorOrigin = SnackbarOrigin;
export type SnackbarContentProps = {
	/**
	 * The action to display, renders after the message
	 */
	action?: ReactNode;
	/**
	 * The message to display
	 */
	message?: ReactNode;
	/**
	 * Additional css classes to help with unique styling of the snackbar, internal
	 */
	className?: string;
};
export type SnackbarProps = PropsWithChildren<{
	/**
	 *  Optional unique identifier
	 */
	id?: string;
	/**
	 * If true, the component is shown
	 * @default false
	 */
	isOpen?: boolean;
	/**
	 * The number of milliseconds to wait before automatically calling onClose()
	 * @default null
	 */
	autoHideDuration?: number | null;
	/**
	 * Additional css classes to help with unique styling of the snackbar, external
	 */
	className?: string;
	/**
	 * Optional, used to control the open prop
	 * event: Event | SyntheticEvent<Element, Event>, reason: string
	 */
	onClose?: (event: Event | SyntheticEvent<Element, Event>, reason: CloseReason) => void;
	/**
	 * The anchor of the `Snackbar`.
	 * the horizontal alignment is ignored.
	 * @default vertical: 'bottom', horizontal: 'left'
	 */
	anchorOrigin?: AnchorOrigin;
	/**
	 * Props applied to the [`SnackbarContent`](/material-ui/api/snackbar-content/) element.
	 */
	ContentProps?: SnackbarContentProps;
}>;
/**
 * Snackbar that provides brief notifications
 *
 * Thanks to MUI for heavy inspiration and documentation
 * https://mui.com/material-ui/getting-started/overview/
 */
export declare function Snackbar({ autoHideDuration, id, isOpen, className, onClose, anchorOrigin, ContentProps, children, }: SnackbarProps): import("react/jsx-runtime").JSX.Element;
export type SwitchProps = {
	/**
	 *  Optional unique identifier
	 */
	id?: string;
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
export declare function Switch({ id, isChecked: checked, isDisabled, hasError, className, onChange, }: SwitchProps): import("react/jsx-runtime").JSX.Element;
export interface TableCalculatedColumn<R> extends TableColumn<R> {
	readonly idx: number;
	readonly width: number | string;
	readonly minWidth: number;
	readonly maxWidth: number | undefined;
	readonly resizable: boolean;
	readonly sortable: boolean;
	readonly frozen: boolean;
	readonly isLastFrozenColumn: boolean;
	readonly rowGroup: boolean;
	readonly renderCell: (props: RenderCellProps<R>) => ReactNode;
}
export type TableCellClickArgs<R> = CellClickArgs<R>;
export type TableCellKeyboardEvent = CellKeyboardEvent;
export type TableCellKeyDownArgs<R> = CellKeyDownArgs<R>;
export type TableCellMouseEvent = CellMouseEvent;
export type TableColumn<R> = {
	/**
	 * The name of the column. By default it will be displayed in the header cell
	 */
	readonly name: string | ReactElement;
	/**
	 * A unique key to distinguish each column
	 */
	readonly key: string;
	/**
	 * Column width. If not specified, it will be determined automatically
	 * based on grid width and specified widths of other columns
	 */
	readonly width?: number | string;
	/**
	 * Minimum column width in px.
	 */
	readonly minWidth?: number;
	/**
	 * Maximum column width in px.
	 */
	readonly maxWidth?: number;
	/**
	 * If `true`, editing is enabled. If no custom cell editor is provided through `renderEditCell`
	 * the default text editor will be used for editing.
	 * Note: If `editable` is set to 'true' and no custom `renderEditCell` is provided,
	 * the internal logic that sets the `renderEditCell` will shallow clone the column.
	 */
	readonly editable?: boolean | ((row: R) => boolean) | null;
	/**
	 * Determines whether column is frozen or not
	 */
	readonly frozen?: boolean;
	/**
	 * Enable resizing of a column
	 */
	readonly resizable?: boolean;
	/**
	 * Enable sorting of a column
	 */
	readonly sortable?: boolean;
	/**
	 * Sets the column sort order to be descending instead of ascending the first time
	 * the column is sorted
	 */
	readonly sortDescendingFirst?: boolean | null;
	/**
	 * Editor to be rendered when cell of column is being edited.
	 * Don't forget to also set the `editable` prop to true in order to enable editing.
	 */
	readonly renderEditCell?: ((props: TableEditorProps<R>) => ReactNode) | null;
};
export type TableCopyEvent<R> = CopyEvent<R>;
export type TableEditorProps<R> = {
	column: TableCalculatedColumn<R>;
	row: R;
	onRowChange: (row: R, commitChanges?: boolean) => void;
	onClose: (commitChanges?: boolean) => void;
};
export type TablePasteEvent<R> = PasteEvent<R>;
export type TableRowsChangeData<R> = RowsChangeData<R>;
export type TableSortColumn = SortColumn;
export type TableProps<R> = {
	/**
	 * An array of objects representing each column on the grid
	 */
	columns: readonly TableColumn<R>[];
	/**
	 * Whether or not a column with checkboxes is inserted that allows you to select rows
	 */
	enableSelectColumn?: boolean;
	/**
	 * Specifies the width of the select column. Only relevant when enableSelectColumn is true
	 * @default 50
	 */
	selectColumnWidth?: number;
	/**
	 * An array of objects representing the currently sorted columns
	 */
	sortColumns?: readonly TableSortColumn[];
	/**
	 * A callback function that is called when the sorted columns change
	 * @param sortColumns An array of objects representing the currently sorted columns in the table.
	 */
	onSortColumnsChange?: (sortColumns: TableSortColumn[]) => void;
	/**
	 * A callback function that is called when a column is resized
	 * @param idx The index of the column being resized
	 * @param width The new width of the column in pixels
	 */
	onColumnResize?: (idx: number, width: number) => void;
	/**
	 * Default column width. If not specified, it will be determined automatically
	 * based on grid width and specified widths of other columns
	 */
	defaultColumnWidth?: number;
	/**
	 * Minimum column width in px.
	 */
	defaultColumnMinWidth?: number;
	/**
	 * Maximum column width in px.
	 */
	defaultColumnMaxWidth?: number;
	/**
	 * Whether or not columns are sortable by default
	 * @default true
	 */
	defaultColumnSortable?: boolean;
	/**
	 * Whether or not columns are resizable by default
	 * @default true
	 */
	defaultColumnResizable?: boolean;
	/**
	 * An array of objects representing the rows in the grid
	 */
	rows: readonly R[];
	/**
	 * A function that returns the key for a given row
	 */
	rowKeyGetter?: (row: R) => Key;
	/**
	 * The height of each row in pixels
	 * @default 35
	 */
	rowHeight?: number;
	/**
	 * The height of the header row in pixels
	 * @default 35
	 */
	headerRowHeight?: number;
	/**
	 * A set of keys representing the currently selected rows
	 */
	selectedRows?: ReadonlySet<Key>;
	/**
	 * A callback function that is called when the selected rows change
	 */
	onSelectedRowsChange?: (selectedRows: Set<Key>) => void;
	/**
	 * A callback function that is called when the rows in the grid change
	 */
	onRowsChange?: (rows: R[], data: TableRowsChangeData<R>) => void;
	/**
	 * A callback function that is called when a cell is clicked
	 * @param event The event source of the callback
	 */
	onCellClick?: (args: TableCellClickArgs<R>, event: TableCellMouseEvent) => void;
	/**
	 * A callback function that is called when a cell is double-clicked
	 * @param event The event source of the callback
	 */
	onCellDoubleClick?: (args: TableCellClickArgs<R>, event: TableCellMouseEvent) => void;
	/**
	 * A callback function that is called when a cell is right-clicked
	 * @param event The event source of the callback
	 */
	onCellContextMenu?: (args: TableCellClickArgs<R>, event: TableCellMouseEvent) => void;
	/**
	 * A callback function that is called when a key is pressed while a cell is focused
	 * @param event The event source of the callback
	 */
	onCellKeyDown?: (args: TableCellKeyDownArgs<R>, event: TableCellKeyboardEvent) => void;
	/**
	 * The text direction of the table
	 * @default "ltr"
	 */
	direction?: "ltr" | "rtl";
	/**
	 * Whether or not virtualization is enabled for the table
	 * @default true
	 */
	enableVirtualization?: boolean;
	/**
	 * A callback function that is called when the table is scrolled
	 * @param event The event source of the callback
	 */
	onScroll?: (event: UIEvent<HTMLDivElement>) => void;
	/**
	 * A callback function that is called when the user copies data from the table.
	 * @param event The event source of the callback
	 */
	onCopy?: (event: TableCopyEvent<R>) => void;
	/**
	 * A callback function that is called when the user pastes data into the table.
	 * @param event The event source of the callback
	 */
	onPaste?: (event: TablePasteEvent<R>) => R;
	/**
	 * Additional css classes to help with unique styling of the table
	 */
	className?: string;
	/**
	 *  Optional unique identifier
	 */
	id?: string;
};
/**
 * Configurable table component
 *
 * Thanks to Adazzle for heavy inspiration and documentation
 * https://adazzle.github.io/react-data-grid/
 */
export declare function Table<R>({ columns, sortColumns, onSortColumnsChange, onColumnResize, defaultColumnWidth, defaultColumnMinWidth, defaultColumnMaxWidth, defaultColumnSortable, defaultColumnResizable, rows, enableSelectColumn, selectColumnWidth, rowKeyGetter, rowHeight, headerRowHeight, selectedRows, onSelectedRowsChange, onRowsChange, onCellClick, onCellDoubleClick, onCellContextMenu, onCellKeyDown, direction, enableVirtualization, onCopy, onPaste, onScroll, className, id, }: TableProps<R>): import("react/jsx-runtime").JSX.Element;
export type TextFieldProps = {
	/**
	 * The variant to use.
	 * @default 'outlined'
	 */
	variant?: "outlined" | "filled";
	/**
	 *  Optional unique identifier
	 */
	id?: string;
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
export declare function TextField({ variant, id, isDisabled, hasError, isFullWidth, helperText, label, placeholder, isRequired, className, defaultValue, value, onChange, onFocus, onBlur, }: TextFieldProps): import("react/jsx-runtime").JSX.Element;
export interface DataHandler {
	(isSupportAndDevelopment: boolean): GridMenuInfo;
}
export type ToolbarProps = PropsWithChildren<{
	/**
	 * The handler to use for menu commands (and eventually toolbar commands).
	 */
	commandHandler: CommandHandler;
	/**
	 * The handler to use for menu data if there is no menu provided.
	 */
	dataHandler?: DataHandler;
	/**
	 *  Optional unique identifier
	 */
	id?: string;
	/**
	 * The optional grid menu to display. If not specified, the "hamburger" menu will not display.
	 */
	menu?: GridMenuInfo;
	/**
	 * Additional css classes to help with unique styling of the toolbar
	 */
	className?: string;
}>;
export function Toolbar({ menu: propsMenu, dataHandler, commandHandler, className, id, children, }: ToolbarProps): import("react/jsx-runtime").JSX.Element;

export {
	MenuColumnInfo as MenuColumn,
};

export {};
