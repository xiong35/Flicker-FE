export type Awaited<T> = T extends Promise<infer P> ? P : never;
