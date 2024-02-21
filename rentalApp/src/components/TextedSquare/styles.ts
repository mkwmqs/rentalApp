import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";

export const styles = StyleSheet.create({
    shapeDefaults: {
        width: 131,
        height: 95,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
      },
      textDefaults: {
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.medium,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        textAlign: 'center',
      },

      selectedShape: {
        backgroundColor: 'lightgreen', 
      },
      selectedText: {
        fontWeight: 'bold',
      },      
  });

