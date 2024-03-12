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
    marginTop: 32,
    marginBottom: 160,
  },

  header:{
    fontFamily: fonts.medium,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 30
  },

  vehicleBox:{
    marginTop: 32
  }

 


});
