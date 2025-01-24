import { StyleSheet, View, Text } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.tableHeader}>
      <View style={styles.firstColumnHeader}>
        <Text style={styles.columnHeader}>Ticker</Text>
        <Text style={styles.columnHeader}>Price (USD)</Text>
      </View>
      <Text style={[styles.columnHeader, { marginLeft: 24 }]}>24h%</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  tableHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  firstColumnHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2f3640',
  },
});
