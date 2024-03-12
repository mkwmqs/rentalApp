import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import color from "../../../styles/color";

export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
  },

  bodyContainer:{
    marginHorizontal: 16,

  },

  header:{
    marginTop: 50,
    fontFamily: fonts.medium,
    fontSize: 16,
  },

  descriptor: {
    marginTop: 50,
    marginBottom: 120,
    fontFamily: fonts.light,
    fontSize: 16,
    height: 100,
  },

  forwardButton:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },


  
});
