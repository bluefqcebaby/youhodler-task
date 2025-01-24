import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StoreProvider } from '@/store/store-context';
import { Platform, StyleSheet } from 'react-native';
import { FetchingWrapper } from '@/components/fetching-wrapper';

export default function RootLayout() {
  return (
    <StoreProvider>
      <SafeAreaView style={styles.container}>
        <FetchingWrapper>
          <Stack>
            <Stack.Screen
              name="index"
              options={{ headerShown: false, title: 'Dashboard' }}
            />
            {/* TODO: Add permanent back button at [ticker] on the web */}
            <Stack.Screen
              name="[ticker]"
              options={{
                headerTitleAlign: 'center',
              }}
            />
          </Stack>
        </FetchingWrapper>
      </SafeAreaView>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    ...(Platform.OS === 'web' && {
      maxWidth: 1200,
      width: '100%',
      marginHorizontal: 'auto',
    }),
  },
});
