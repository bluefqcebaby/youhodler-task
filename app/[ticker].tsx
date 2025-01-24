import { useStore } from '@/hooks/use-store';
import { observer } from 'mobx-react-lite';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { priceBeautifier } from '@/utils/price-beautifier';
import { useMemo } from 'react';
import BackButton from '@/components/back-button';

const Ticker = observer(() => {
  const { ticker } = useLocalSearchParams<{ ticker: string }>();
  const { getCoinDataByTicker } = useStore();
  const coinData = getCoinDataByTicker(ticker);

  const coinDetails = useMemo(() => {
    if (!coinData) return [];

    return [
      { label: 'Ask price:', value: priceBeautifier(coinData.ask) },
      { label: 'Bid price:', value: priceBeautifier(coinData.bid) },
      { label: '24h diff:', value: `${coinData.diff24h.toFixed(3)}%` },
      { label: 'Rate:', value: `$${priceBeautifier(coinData.rate)}` },
    ];
  }, [coinData]);

  if (!coinData) {
    // TODO: redirect to 404 page
    return null;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: ticker.toUpperCase(),
          headerLeft: () => <BackButton />,
        }}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          {coinDetails.map((detail, index) => (
            <View key={index} style={styles.infoContainer}>
              <Text style={styles.label}>{detail.label}</Text>
              <Text style={styles.value}>{detail.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  value: {
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: '600',
  },
});

export default Ticker;
