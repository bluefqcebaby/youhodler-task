import { useStore } from '@/hooks/use-store';
import { PropsWithChildren, useEffect, useState, FC } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { CommonError } from './common-error';

export const FetchingWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { fetchCoinsInfo, error } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    await fetchCoinsInfo();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2f3640" />
      </View>
    );
  }

  if (error) {
    return <CommonError error={error} fetchData={fetchData} />;
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
