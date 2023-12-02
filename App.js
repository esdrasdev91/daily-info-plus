// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, StatusBar, useColorScheme } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
      <WebView
      allowsFullscreenVideo={false}
        source={{ uri: 'https://dailyinfooficial.blogspot.com/' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
