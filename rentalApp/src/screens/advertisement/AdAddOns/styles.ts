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
    marginTop: 32,
    marginBottom: 160,
  },

  header:{
    fontFamily: fonts.medium,
    fontSize: 16,
    marginTop: 32,
  },

  disclaimer:{
    fontFamily: fonts.light,
    fontSize: 13,
    marginTop: 32,
  },

  addOnsContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  
  addOnsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  addOnFirstColumn:{
    marginRight: 28,
  }

});
