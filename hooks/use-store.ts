import { StoreContext } from '@/store/store-context';
import { useContext } from 'react';

export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return store;
};
