import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';
import styles from './src/styles/index'
import restaurants from './assets/restaurants.json'

export default function App() {
  return (
    <View style={styles.container}>

      <RestaurantItem restaurant={restaurants[0]} />
      <RestaurantItem restaurant={restaurants[1]} />


      <StatusBar style="auto" />
    </View>
  );
}
