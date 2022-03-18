/**
 * version 1
 */
type First<T extends any[]> = T extends [] ? never : T[0];
/**
 * version 2
 */
type First2<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
