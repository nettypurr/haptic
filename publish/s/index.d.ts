declare type X = any;
declare type Fn = () => unknown;
declare type Base<T> = {
    (): T;
    $o: 1;
};
declare type WritableSignal<T> = Base<T> & {
    (nextValue: T): T;
    observers: Set<Update<X>>;
    observersRan: Set<Update<X>> | undefined;
    pending: T | [];
};
declare type ComputedSignal<T> = Base<T> & {
    update: Update<T>;
};
declare type Signal<T> = WritableSignal<T> | ComputedSignal<T>;
declare type Update<T> = {
    (): T;
    stale: boolean;
    signals: Signal<X>[];
    children: Update<X>[];
};
declare function createWritableSignal<T>(value: T): WritableSignal<T>;
declare function createComputedSignal<F extends Fn, T = ReturnType<F>>(fn: F): ComputedSignal<T>;
declare function subscribe<F extends Fn>(fn: F): () => void;
declare function unsubscribe<F extends Fn & { update: Update<X>; }>(fn: F): void;
declare function transaction<T>(fn: () => T): T;
declare function sample<T>(fn: () => T): T;
declare function on(signals: Signal<X>[], fn: Fn, options?: { onlyChanges: boolean; }): ComputedSignal<unknown>;
export { Signal, WritableSignal, ComputedSignal, Update };
export { createWritableSignal as s, createWritableSignal as signal, createComputedSignal as computed, subscribe, unsubscribe, transaction, sample, on };
