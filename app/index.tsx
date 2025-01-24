import { observer } from 'mobx-react-lite';
import { StyleSheet, View } from 'react-native';
import { Search } from '@/components/index/search';
import { CoinsList } from '@/components/index/coins-list';

const Dashboard = observer(() => {
  return (
    <View style={styles.container}>
      <Search />
      <CoinsList />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Dashboard;
