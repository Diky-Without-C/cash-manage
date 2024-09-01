export function getLocalStorage<T>(key: string, initialValue: T): T {
  const item = localStorage.getItem(key);
  try {
    return item ? JSON.parse(item) : initialValue;
  } catch {
    return initialValue;
  }
}

export function setLocalStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const storedValue = getLocalStorage<T>(key, initialValue);

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setLocalStorage(key, valueToStore);
  };

  return [storedValue, setValue] as const;
}
