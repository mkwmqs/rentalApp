import { StyleSheet } from "react-native";
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      padding: 8,
      borderRadius: 5,
    },
    currencySymbol: {
      marginRight: 0,
      fontSize: 16,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
  });