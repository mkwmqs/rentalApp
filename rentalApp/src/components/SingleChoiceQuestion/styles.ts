import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";

export const styles = StyleSheet.create({
    questionText: {
      fontSize: 16,
      fontFamily: fonts.medium,
      marginBottom: 16,
    },
    answerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
    },
    radioContainer: {
      width: 18,
      height: 16,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: color.gray_radio,
      backgroundColor: color.gray_radio,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    radioDot: {
      width: 18,
      height: 16,
      borderRadius: 12,
      borderWidth: 2,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
    },
    answerText: {
      fontSize: 13,
      fontFamily: fonts.light,
    },
    disclaimer:{
        fontSize: 13,
        fontFamily: fonts.light,
        marginBottom: 32,
    }
  });

