import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import color from "../../../styles/color";
import { generateBoxShadowStyle } from "../../../styles/boxShadow";


export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '8%',
    flex: 1,
  },

  body:{
    marginHorizontal: 16,
  },

  forwardButton:{
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    paddingHorizontal: 16
    
  },

  header:{
    fontFamily: fonts.semibold,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 30
  },

  subtitle:{
    fontFamily: fonts.light,
    fontSize: 16,
    textAlign: 'left',
    paddingHorizontal: 16,
    marginTop: 48,
    alignContent: 'center'
  },

  guidanceContainer:{
    marginTop: 40
  }




});
