
export function createMap<T extends Record<K, string | number | symbol>, K extends keyof T>(
  data: T[], 
  key: K
): Record<T[K], T[]> {
  return data.reduce((result, item) => {
    const keyValue = item[key];

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);

    return result;
  }, {} as Record<T[K], T[]>);
}
