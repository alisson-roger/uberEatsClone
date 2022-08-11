import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, FlatList } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';
import styles from './src/styles/index'
import restaurants from './assets/restaurants.json'

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList data={restaurants} renderItem={({ item }) => <RestaurantItem restaurant={item} />} showsVerticalScrollIndicator={false} />

      <StatusBar style="auto" />
    </View>
  );
}
