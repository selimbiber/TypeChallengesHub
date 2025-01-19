type MyPartial<T> = {
  [K in keyof T]?: T[K] extends object ? MyPartial<T[K]> : T[K];
};

type Test11 = MyPartial<{ a: number; b: string }>; // { a?: number; b?: string }
type Test22 = MyPartial<{ x: boolean; y: { z: string } }>; // { x?: boolean; y?: { z?: string } }
type Test33 = MyPartial<{}>; // {}
