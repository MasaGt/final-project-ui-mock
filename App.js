import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
} from 'react-native';
import { VineyardConfig } from "./components/VineyardConfig";
import { Notification } from "./components/Notification";

export default function App() {

  return (
    <View style={styles.container}>
    <VineyardConfig />
    <Notification style={{zIndex:0}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
