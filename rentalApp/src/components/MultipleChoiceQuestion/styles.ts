import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";

export const styles = StyleSheet.create({
    questionText: {
      fontSize: 16,
      fontFamily: fonts.medium,
      marginBottom: 16,
    },

    containerTwoColumns:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 16, 
      flexWrap:'wrap'
    },
     
    containerSingleColumn:{
      width:'100%',
      paddingHorizontal: 16, 
    },
    answerContainerSingleColumn: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      width: '100%'
    },
    answerContainerTwoColumns: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      width: '50%',
    },
    radioContainer: {
      width: 16,
      height: 16,
      borderWidth: 2,
      borderColor: color.gray_radio,
      backgroundColor: color.gray_radio,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    radioDot: {
      width: 16,
      height: 16,
      borderColor: 'green',
      borderWidth: 2,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },

    radioBallContainer: {
      width: 18,
      height: 16,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: color.gray_radio,
      backgroundColor: color.gray_radio,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    radioBallDot: {
      width: 18,
      height: 16,
      borderRadius: 12,
      borderWidth: 2,
      backgroundColor: 'green',
      borderColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },

    textContainer: {
      marginLeft: 16
    },
    answerText: {
      fontSize: 16,
      fontFamily: fonts.light,
    },
    disclaimer:{
        fontSize: 13,
        fontFamily: fonts.light,
        marginBottom: 32,
    }
  });

