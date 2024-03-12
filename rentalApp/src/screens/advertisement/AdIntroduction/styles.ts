import { Platform, StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import color from "../../../styles/color";
import { generateBoxShadowStyle } from "../../../styles/boxShadow";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  bodyContainer:{
    marginHorizontal: 16,
    marginTop: 24,
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

  forwardButton:{
    marginTop: 32,
    marginBottom: 160,
  },

});




