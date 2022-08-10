import { Image, StyleSheet, Text, View } from 'react-native';
import styles from '../../styles/index'

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>R$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
    </View>
  )
}


export default RestaurantItem

