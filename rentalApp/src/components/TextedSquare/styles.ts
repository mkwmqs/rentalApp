import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { generateBoxShadowStyle } from "../../styles/boxShadow";

export const styles = StyleSheet.create({
    shapeDefaults: {
        width: 131,
        height: 95,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        borderWidth: 0.5,
        borderColor: '#0000001A',
        borderRadius: 10,  
        backgroundColor: 'white',
        ...generateBoxShadowStyle(0, 0, '#0000001A', 20, 1, 16, '#0000001A'),  
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
        backgroundColor: color.green_background, 
      },
      selectedText: {
        fontWeight: 'bold',
      },      
  });

