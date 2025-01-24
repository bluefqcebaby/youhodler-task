import { FlashList } from '@shopify/flash-list';
import { RefreshControl, View, Text } from 'react-native';
import { Header } from './header';
import { useStore } from '@/hooks/use-store';
import { CoinItem } from './coin-item';
import { ICoinData } from '@/types/coins';
import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

export const CoinsList = observer(() => {
  const { filteredCoins, fetchCoinsInfo } = useStore();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchCoinsInfo();
    setIsRefreshing(false);
  };

  const renderCoinItem = ({ item }: { item: ICoinData }) => {
    return <CoinItem info={item} />;
  };

  return (
    <FlashList
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      ListHeaderComponent={<Header />}
      data={filteredCoins}
      renderItem={renderCoinItem}
      estimatedItemSize={100}
      ListEmptyComponent={
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>No coins found</Text>
        </View>
      }
    />
  );
});
