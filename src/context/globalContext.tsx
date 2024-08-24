import { createContext, useContext, useState, ReactNode } from "react";

type Data = Record<string, any>;

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<Data>({});

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [variable, setVariable] = useState<Data>({});

  const getData = (key: string) => {
    return variable[key];
  };

  const setData = (value: any) => {
    setVariable((prev) => ({ ...prev, ...value }));
  };

  return (
    <GlobalContext.Provider value={{ getData, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);
export default useGlobalContext;
