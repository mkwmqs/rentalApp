import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import color from "../../../styles/color";

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '8%',
    flexGrow: 1,
  },

  body:{
    marginHorizontal: 16,
  },

  forwardButton:{
    marginTop: 280,
    marginBottom: 160,
    marginHorizontal: 16,
  },

  header:{
    fontFamily: fonts.medium,
    fontSize: 16,
    marginTop: 32,
  },

  description:{
    fontFamily: fonts.light,
    fontSize: 13,
    marginTop: 32,
    textAlign: 'justify'
  },



});
