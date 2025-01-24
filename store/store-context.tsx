import { createContext, PropsWithChildren } from 'react';
import { rootStore } from '.';

export const StoreContext = createContext<typeof rootStore | null>(null);

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
