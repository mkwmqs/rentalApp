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
    marginTop: 48
    
  },

  stepHeader:{
    fontFamily: fonts.medium,
    fontSize: 16,
    textAlign: 'right',
    marginHorizontal: 16
  },
  header:{
    fontFamily: fonts.medium,
    fontSize: 16
  },
  textBody:{
    fontFamily: fonts.light,
    fontSize: 16,
    marginTop: 16
  },
  imageContainer:{
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 72
  },
  image:{
    width: 197,
    height: 134,
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  paragraphHeader:{
    fontFamily: fonts.medium,
    fontSize: 16
  },
  paragraph:{
    fontSize: 16,
    fontFamily: fonts.light,
    marginTop: 24
  }

});
