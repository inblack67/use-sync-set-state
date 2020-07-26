import { useState, useEffect } from 'react';

export default (key: any, defaultValue: any) => {

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e: any) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key]);

  const setValueInLocalStorage = (newValue: any) => {
    setValue((currentValue: any) => {
      const res = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(res));
      return res;
    })
  }

  return [value, setValueInLocalStorage]
}