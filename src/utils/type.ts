/**
 * 设置一个类型的指定字段为可选
 *
 * @param T 目标对象
 * @param O 需要忽略的字段
 */
export type SetOption<T, O extends keyof T> = {
  [K in Exclude<keyof T, O>]: T[K];
} & {
  [K in O]?: T[K];
};
