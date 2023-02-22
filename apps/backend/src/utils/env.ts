export function getEnv<T extends string | number | boolean | null>(key: string, fallback?: T): T {
    const v = process.env[key];
    if (v === undefined) {
      if (fallback !== undefined) {
        return fallback;
      }
      throw new Error(`Expected environment variable "${key}"`);
    }
    if (typeof fallback === 'boolean') {
      return !(v?.toString().toLowerCase() === 'false' || !v) as T;
    }
    if (typeof fallback === 'number') {
      return parseFloat(v) as T;
    }
    return v as T;
  }
  