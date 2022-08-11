import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
    ,
    restaurantContainer: {
      width: '100%',
      marginVertical: '1rem'
    },
    image: {
      width: '90vw',
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
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    rating: {
      marginLeft: 'auto',
      backgroundColor: 'lightgray',
      width: '1.6rem',
      height: '1.6rem',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '1rem'
    }

  })

export default styles