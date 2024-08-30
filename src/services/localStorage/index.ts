export function getLocalStorage<T>(key: string, initialValue: T): T {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
}

export function setLocalStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
  return [
    getLocalStorage<T>(key, initialValue),
    (value: T) => setLocalStorage<T>(key, value),
  ] as const;
}
