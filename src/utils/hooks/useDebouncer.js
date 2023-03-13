import { useEffect, useCallback } from "react";

const debounce = (func, wait) => {
  let timer;

  function executeFunc(...args) {
    const realFunc = () => {
      clearTimeout(timer);
      func(...args);
    };

    clearTimeout(timer);
    timer = setTimeout(realFunc, wait);
  }

  executeFunc.cancel = () => {
    clearTimeout(timer);
  };

  return executeFunc;
};

const useDebounce = (cb = (...args) => {}, wait = 500, deps = []) => {
  const debounceCB = useCallback(debounce(cb, wait), deps);
  useEffect(() => {
    return () => {
      debounceCB.cancel();
    };
  }, deps);

  return debounceCB;
};

export default useDebounce;
