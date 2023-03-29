import { Unsubscriber } from '@shared/utils/papi-util';

/** Callback function that accepts an event and should run when an event is emitted */
export type PEventHandler<T> = (event: T) => void;

/**
 * Function that subscribes the provided callback to run when this event is emitted.
 * @param callback function to run with the event when it is emitted
 * @returns unsubscriber function to run to stop calling the passed-in function when the event is emitted
 */
export type PEvent<T> = (callback: PEventHandler<T>) => Unsubscriber;
