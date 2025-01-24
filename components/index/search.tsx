import { useStore } from '@/hooks/use-store';
import { StyleSheet, TextInput } from 'react-native';

export const Search = () => {
  const { setSearchQuery } = useStore();

  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search by ticker..."
      onChangeText={setSearchQuery}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
});
