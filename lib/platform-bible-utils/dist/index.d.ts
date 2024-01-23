// Generated by dts-bundle-generator v8.0.1

/** This class provides a convenient way for one task to wait on a variable that another task sets. */
export declare class AsyncVariable<T> {
	private readonly variableName;
	private readonly promiseToValue;
	private resolver;
	private rejecter;
	/**
	 * Creates an instance of the class
	 *
	 * @param variableName Name to use when logging about this variable
	 * @param rejectIfNotSettledWithinMS Milliseconds to wait before verifying if the promise was
	 *   settled (resolved or rejected); will reject if it has not settled by that time. Use -1 if you
	 *   do not want a timeout at all.
	 */
	constructor(variableName: string, rejectIfNotSettledWithinMS?: number);
	/**
	 * Get this variable's promise to a value. This always returns the same promise even after the
	 * value has been resolved or rejected.
	 *
	 * @returns The promise for the value to be set
	 */
	get promise(): Promise<T>;
	/**
	 * A simple way to see if this variable's promise was resolved or rejected already
	 *
	 * @returns Whether the variable was already resolved or rejected
	 */
	get hasSettled(): boolean;
	/**
	 * Resolve this variable's promise to the given value
	 *
	 * @param value This variable's promise will resolve to this value
	 * @param throwIfAlreadySettled Determines whether to throw if the variable was already resolved
	 *   or rejected
	 */
	resolveToValue(value: T, throwIfAlreadySettled?: boolean): void;
	/**
	 * Reject this variable's promise for the value with the given reason
	 *
	 * @param reason This variable's promise will be rejected with this reason
	 * @param throwIfAlreadySettled Determines whether to throw if the variable was already resolved
	 *   or rejected
	 */
	rejectWithReason(reason: string, throwIfAlreadySettled?: boolean): void;
	/** Prevent any further updates to this variable */
	private complete;
}
/** Function to run to dispose of something. Returns true if successfully unsubscribed */
export type Unsubscriber = () => boolean;
/**
 * Returns an Unsubscriber function that combines all the unsubscribers passed in.
 *
 * @param unsubscribers All unsubscribers to aggregate into one unsubscriber
 * @returns Function that unsubscribes from all passed in unsubscribers when run
 */
export declare const aggregateUnsubscribers: (unsubscribers: Unsubscriber[]) => Unsubscriber;
/**
 * Function to run to dispose of something that runs asynchronously. The promise resolves to true if
 * successfully unsubscribed
 */
export type UnsubscriberAsync = () => Promise<boolean>;
/**
 * Returns an UnsubscriberAsync function that combines all the unsubscribers passed in.
 *
 * @param unsubscribers - All unsubscribers to aggregate into one unsubscriber.
 * @returns Function that unsubscribes from all passed in unsubscribers when run
 */
export declare const aggregateUnsubscriberAsyncs: (unsubscribers: (UnsubscriberAsync | Unsubscriber)[]) => UnsubscriberAsync;
/** Callback function that accepts an event and should run when an event is emitted */
export type PlatformEventHandler<T> = (event: T) => void;
/**
 * Function that subscribes the provided callback to run when this event is emitted.
 *
 * @param callback Function to run with the event when it is emitted
 * @returns Unsubscriber function to run to stop calling the passed-in function when the event is
 *   emitted
 */
export type PlatformEvent<T> = (callback: PlatformEventHandler<T>) => Unsubscriber;
/**
 * A PapiEvent that subscribes asynchronously and resolves an asynchronous unsubscriber.
 *
 * Note: The callback itself is not asynchronous.
 */
export type PlatformEventAsync<T> = (callback: PlatformEventHandler<T>) => Promise<UnsubscriberAsync>;
/** Require a `dispose` function */
export interface Dispose {
	/** Release resources and notify dependent services when tearing down an object */
	dispose: UnsubscriberAsync;
}
/** Require an `onDidDispose` event */
export interface OnDidDispose {
	/** Event that emits when `dispose` is called on an object */
	onDidDispose: PlatformEvent<void>;
}
/**
 * Indicates than an object cannot have an `onDidDispose` event. Also allows an object to include a
 * `dispose` function.
 */
export interface CannotHaveOnDidDispose {
	/** Release resources and notify dependent services when tearing down an object */
	dispose?: UnsubscriberAsync;
	/** Event that emits when `dispose` is called on an object */
	onDidDispose?: undefined;
}
/** Allow onDidDispose to exist on the type if it was previously disallowed by CannotHaveOnDidDispose */
export type CanHaveOnDidDispose<T extends CannotHaveOnDidDispose> = Omit<T, "onDidDispose">;
/** Simple collection for UnsubscriberAsync objects that also provides an easy way to run them. */
export declare class UnsubscriberAsyncList {
	private name;
	readonly unsubscribers: Set<Unsubscriber | UnsubscriberAsync>;
	constructor(name?: string);
	/**
	 * Add unsubscribers to the list. Note that duplicates are not added twice.
	 *
	 * @param unsubscribers - Objects that were returned from a registration process.
	 */
	add(...unsubscribers: (UnsubscriberAsync | Unsubscriber | Dispose)[]): void;
	/**
	 * Run all unsubscribers added to this list and then clear the list.
	 *
	 * @returns `true` if all unsubscribers succeeded, `false` otherwise.
	 */
	runAllUnsubscribers(): Promise<boolean>;
}
/**
 * Event manager - accepts subscriptions to an event and runs the subscription callbacks when the
 * event is emitted Use eventEmitter.event(callback) to subscribe to the event. Use
 * eventEmitter.emit(event) to run the subscriptions. Generally, this EventEmitter should be
 * private, and its event should be public. That way, the emitter is not publicized, but anyone can
 * subscribe to the event.
 */
export declare class PlatformEventEmitter<T> implements Dispose {
	/**
	 * Subscribes a function to run when this event is emitted.
	 *
	 * @param callback Function to run with the event when it is emitted
	 * @returns Unsubscriber function to run to stop calling the passed-in function when the event is
	 *   emitted
	 * @alias event
	 */
	subscribe: PlatformEvent<T>;
	/** All callback functions that will run when this event is emitted. Lazy loaded */
	private subscriptions?;
	/** Event for listeners to subscribe to. Lazy loaded */
	private lazyEvent?;
	/** Whether this emitter has been disposed */
	private isDisposed;
	/**
	 * Event for listeners to subscribe to. Subscribes a function to run when this event is emitted.
	 * Use like `const unsubscriber = event(callback)`
	 *
	 * @param callback Function to run with the event when it is emitted
	 * @returns Unsubscriber function to run to stop calling the passed-in function when the event is
	 *   emitted
	 */
	get event(): PlatformEvent<T>;
	/** Disposes of this event, preparing it to release from memory */
	dispose: () => Promise<boolean>;
	/**
	 * Runs the subscriptions for the event
	 *
	 * @param event Event data to provide to subscribed callbacks
	 */
	emit: (event: T) => void;
	/**
	 * Function that runs the subscriptions for the event. Added here so children can override emit
	 * and still call the base functionality. See NetworkEventEmitter.emit for example
	 */
	protected emitFn(event: T): void;
	/** Check to make sure this emitter is not disposed. Throw if it is */
	protected assertNotDisposed(): void;
	/**
	 * Disposes of this event, preparing it to release from memory. Added here so children can
	 * override emit and still call the base functionality.
	 */
	protected disposeFn(): Promise<boolean>;
}
export interface ScriptureReference {
	bookNum: number;
	chapterNum: number;
	verseNum: number;
}
export interface BookInfo {
	shortName: string;
	fullNames: string[];
	chapters: number;
}
export declare const FIRST_SCR_BOOK_NUM = 1;
export declare const LAST_SCR_BOOK_NUM: number;
export declare const FIRST_SCR_CHAPTER_NUM = 1;
export declare const FIRST_SCR_VERSE_NUM = 1;
export declare const getChaptersForBook: (bookNum: number) => number;
export declare const offsetBook: (scrRef: ScriptureReference, offset: number) => ScriptureReference;
export declare const offsetChapter: (scrRef: ScriptureReference, offset: number) => ScriptureReference;
export declare const offsetVerse: (scrRef: ScriptureReference, offset: number) => ScriptureReference;
/** Collection of functions, objects, and types that are used as helpers in other services. */
export declare function newGuid(): string;
/**
 * Determine whether the object is a string
 *
 * @param o Object to determine if it is a string
 * @returns True if the object is a string; false otherwise
 */
export declare function isString(o: unknown): o is string;
/**
 * Get a function that reduces calls to the function passed in
 *
 * @param fn The function to debounce
 * @param delay How much delay in milliseconds after the most recent call to the debounced function
 *   to call the function
 * @returns Function that, when called, only calls the function passed in at maximum every delay ms
 */
export declare function debounce<T extends (...args: any[]) => void>(fn: T, delay?: number): T;
/**
 * Groups each item in the array of items into a map according to the keySelector
 *
 * @param items Array of items to group by
 * @param keySelector Function to run on each item to get the key for the group to which it belongs
 * @param valueSelector Function to run on each item to get the value it should have in the group
 *   (like map function). If not provided, uses the item itself
 * @returns Map of keys to groups of values corresponding to each item
 */
export declare function groupBy<T, K>(items: T[], keySelector: (item: T) => K): Map<K, Array<T>>;
export declare function groupBy<T, K, V>(items: T[], keySelector: (item: T) => K, valueSelector: (item: T, key: K) => V): Map<K, Array<V>>;
/**
 * Function to get an error message from the object (useful for getting error message in a catch
 * block)
 *
 * @example `try {...} catch (e) { logger.info(getErrorMessage(e)) }`
 *
 * @param error Error object whose message to get
 * @returns Message of the error - if object has message, returns message. Otherwise tries to
 *   stringify
 */
export declare function getErrorMessage(error: unknown): string;
/** Asynchronously waits for the specified number of milliseconds. (wraps setTimeout in a promise) */
export declare function wait(ms: number): Promise<void>;
/**
 * Runs the specified function and will timeout if it takes longer than the specified wait time
 *
 * @param fn The function to run
 * @param maxWaitTimeInMS The maximum amount of time to wait for the function to resolve
 * @returns Promise that resolves to the resolved value of the function or undefined if it ran
 *   longer than the specified wait time
 */
export declare function waitForDuration<TResult>(fn: () => Promise<TResult>, maxWaitTimeInMS: number): Promise<Awaited<TResult> | undefined>;
/**
 * Get all functions on an object and its prototype chain (so we don't miss any class methods or any
 * object methods). Note that the functions on the final item in the prototype chain (i.e., Object)
 * are skipped to avoid including functions like `__defineGetter__`, `__defineSetter__`, `toString`,
 * etc.
 *
 * @param obj Object whose functions to get
 * @param objId Optional ID of the object to use for debug logging
 * @returns Array of all function names on an object
 */
export declare function getAllObjectFunctionNames(obj: {
	[property: string]: unknown;
}, objId?: string): Set<string>;
/**
 * Check that two objects are deeply equal, comparing members of each object and such
 *
 * @param a The first object to compare
 * @param b The second object to compare
 *
 *   WARNING: Objects like arrays from different iframes have different constructor function
 *   references even if they do the same thing, so this deep equality comparison fails objects that
 *   look the same but have different constructors because different constructors could produce
 *   false positives in [a few specific
 *   situations](https://github.com/planttheidea/fast-equals/blob/a41afc0a240ad5a472e47b53791e9be017f52281/src/comparator.ts#L96).
 *   This means that two objects like arrays from different iframes that look the same will fail
 *   this check. Please use some other means to check deep equality in those situations.
 *
 *   Note: This deep equality check considers `undefined` values on keys of objects NOT to be equal to
 *   not specifying the key at all. For example, `{ stuff: 3, things: undefined }` and `{ stuff: 3
 *   }` are not considered equal in this case
 *
 *   - For more information and examples, see [this
 *       CodeSandbox](https://codesandbox.io/s/deepequallibrarycomparison-4g4kk4?file=/src/index.mjs).
 *
 * @returns True if a and b are deeply equal; false otherwise
 */
export function deepEqual(a: unknown, b: unknown): boolean;
/**
 * Converts a JavaScript value to a JSON string, changing `undefined` properties in the JavaScript
 * object to `null` properties in the JSON string.
 *
 * WARNING: `null` values will become `undefined` values after passing through {@link serialize} then
 * {@link deserialize}. For example, `{ a: 1, b: undefined, c: null }` will become `{ a: 1, b:
 * undefined, c: undefined }`. If you are passing around user data that needs to retain `null`
 * values, you should wrap them yourself in a string before using this function. Alternatively, you
 * can write your own replacer that will preserve `null` in a way that you can recover later.
 *
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results. Note that all `undefined` values returned
 *   by the replacer will be further transformed into `null` in the JSON string.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON
 *   text to make it easier to read. See the `space` parameter of `JSON.stringify` for more
 *   details.
 */
export declare function serialize(value: unknown, replacer?: (this: unknown, key: string, value: unknown) => unknown, space?: string | number): string;
/**
 * Converts a JSON string into a value, converting all `null` properties from JSON into `undefined`
 * in the returned JavaScript value/object.
 *
 * WARNING: `null` values will become `undefined` values after passing through {@link serialize} then
 * {@link deserialize}. For example, `{ a: 1, b: undefined, c: null }` will become `{ a: 1, b:
 * undefined, c: undefined }`. If you are passing around user data that needs to retain `null`
 * values, you should wrap them yourself in a string before using this function. Alternatively, you
 * can write your own replacer that will preserve `null` in a way that you can recover later.
 *
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of
 *   the object. If a member contains nested objects, the nested objects are transformed before the
 *   parent object is. Note that `null` values are converted into `undefined` values after the
 *   reviver has run.
 */
export declare function deserialize(value: string, reviver?: (this: unknown, key: string, value: unknown) => unknown): any;
/**
 * Check to see if the value is serializable without losing information
 *
 * @param value Value to test
 * @returns True if serializable; false otherwise
 *
 *   Note: the values `undefined` and `null` are serializable (on their own or in an array), but
 *   `null` values get transformed into `undefined` when serializing/deserializing.
 *
 *   WARNING: This is inefficient right now as it stringifies, parses, stringifies, and === the value.
 *   Please only use this if you need to
 *
 *   DISCLAIMER: this does not successfully detect that values are not serializable in some cases:
 *
 *   - Losses of removed properties like functions and `Map`s
 *   - Class instances (not deserializable into class instances without special code)
 *
 *   We intend to improve this in the future if it becomes important to do so. See [`JSON.stringify`
 *   documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description)
 *   for more information.
 */
export declare function isSerializable(value: unknown): boolean;
/**
 * HTML Encodes the provided string. Thanks to ChatGPT
 *
 * @param str String to HTML encode
 * @returns HTML-encoded string
 */
export declare const htmlEncode: (str: string) => string;

export {};