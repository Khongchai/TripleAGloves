/**
 * First array will be used as key
 */
export function useFirstAsKeyForSecondkeyArr<T>(
  keyArr: string[],
  valueArr: T[]
) {
  const record: Record<string, T> = {}
  keyArr.forEach((key, i) => (record[key] = valueArr[i]))
  return record
}
