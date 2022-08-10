import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '.5rem',
    }
    ,
    restaurantContainer: {
      width: '100%',
      marginVertical: '1rem'
    },
    image: {
      width: '100%',
      aspectRatio: 5 / 3,
      marginBottom: '.3rem'
    },
    title: {
      fontSize: '1rem',
      fontWeight: "bold",
      marginVertical: '.3rem'
    },
    subtitle: {
      color: 'gray'
    },
  })

export default styles