import { createContext, ReactNode, useContext, useMemo } from 'react';
import { ApiConfig, ApiProviderContext } from './types/api';
import { ApiHooks } from './types/hooks';

export const ApiContext = createContext<Partial<ApiProviderContext>>({});

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
  config: ApiConfig;
  hooks: ApiHooks;
}

export const ApiProvider = ({ children, config, hooks }: ApiProviderProps) => {
  const coreConfig = useMemo(() => {
    return {
      fetcher: config.fetch,
      hooks,
      checkoutCookie: config.checkoutCookie,
    };
  }, [config.fetch, config.checkoutCookie, hooks]);

  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => {
  return useContext(ApiContext) as ApiProviderContext;
};
