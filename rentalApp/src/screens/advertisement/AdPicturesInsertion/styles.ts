import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import color from "../../../styles/color";

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '8%',
    padding:2,
    flexGrow: 1,
  },

  body:{
    marginHorizontal: 16,
  },

  forwardButton:{
    marginBottom: 160,
    marginTop: 32
  },

  header:{
    fontFamily: fonts.medium,
    fontSize: 24,
    marginTop: 32,
    textAlign: 'left',
    marginHorizontal: 36,   
  },



});
