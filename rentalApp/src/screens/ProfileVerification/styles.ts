import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'left'
      
    },
    description: {
      textAlign: 'left',
      marginBottom: 10,
      
    },
    button: {
      backgroundColor: '#63E1FD',
      padding: 10,
      borderRadius: 5,
      margin: 10
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    verificationText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'green',
      marginTop: 20,
    },
    card: {
      alignItems: 'center',
      padding: 40,
      backgroundColor: '#fff',
      elevation: 5,
      marginTop: 40,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 80,
      marginBottom: 10,
      
    },
    cards:{
      alignItems: 'center',
      padding: 25,
      backgroundColor: '#D9D9D940',
      marginTop: 25,
      borderRadius: 5,
      
    }
  });