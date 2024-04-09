import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import color from "../../../styles/color";

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '8%',
    flex: 1,
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

  headerPicture:{
    width: 310, 
    height: 149,
    marginTop: 48
  },

  image:{
    width: 310, 
    height: 149,
  }
  
});
