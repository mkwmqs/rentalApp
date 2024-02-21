import { Platform, StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import color from "../../../styles/color";

const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ) => {
    if (Platform.OS === 'ios') {
      return {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius
      };
    } else if (Platform.OS === 'android') {
      return {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
  },

  bodyContainer:{
    marginHorizontal: 16,
    marginTop: 24
  },

  header:{
    fontFamily: fonts.medium,
    fontSize: 20
  },

  subtitle:{
    fontFamily: fonts.light,
    fontSize: 14,
    marginTop: 16,
    marginBottom: 12
  },

  boxHeader:{
    fontFamily: fonts.medium,
    fontSize: 14
  },

  singleParagraph: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: 16
  },

  bottomParagraph:{
    fontFamily: fonts.light,
    fontSize: 14,
    marginTop: 16,    
  },

  
  getAwareLink:{
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: 16
  },

  boxShadow:{
    marginTop: 12,
    padding: 16,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 10, 
    ...generateBoxShadowStyle(0, 0, '#0000001A', 20, 10, 16, '#0000001A'),
  },

});




