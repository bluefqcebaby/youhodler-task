import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ICoinData } from '@/types/coins';
import { Link } from 'expo-router';
import { priceBeautifier } from '@/utils/price-beautifier';

interface Props {
  info: ICoinData;
}

export const CoinItem: React.FC<Props> = ({ info }) => {
  const isPositive = info.diff24h > 0;

  return (
    <View style={styles.coinContainer}>
      <Link href={`/${info.crypto}`} asChild>
        <TouchableOpacity style={styles.pairContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.text}>{info.crypto.toUpperCase()}</Text>
            <Text style={[styles.text, styles.price]}>
              ${priceBeautifier(info.rate)}
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              styles[isPositive ? 'positive' : 'negative'],
              styles.price,
            ]}
          >
            {isPositive ? '+' : ''}
            {info.diff24h.toFixed(3)}%
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  coinContainer: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: '#e1e1e1',
  },
  pairContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    color: '#2f3640',
    fontSize: 16,
  },
  price: {
    marginLeft: 8,
  },
  positive: {
    color: '#44bd32',
  },
  negative: {
    color: '#e84118',
  },
});
