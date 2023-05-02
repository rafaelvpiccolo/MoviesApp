import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NativeBaseProvider>
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
    </NativeBaseProvider>
  );
}