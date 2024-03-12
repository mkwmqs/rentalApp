import { StyleSheet } from "react-native";
import fonts from '../../styles/fonts';



export const styles = StyleSheet.create({
    container: {
    },
    title: {
      fontSize: 16,
      fontFamily: fonts.medium,
    },
    contentContainer: {
      marginTop: 12,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    paragraph: {
      flex: 1,
      marginRight: 16,
      paddingLeft: 16,
      fontSize: 16,
      fontFamily: fonts.light,
    },
    image: {
      width: 100,
      aspectRatio: 1,
      resizeMode: 'contain'
    },
  });