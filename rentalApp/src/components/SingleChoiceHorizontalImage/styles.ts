import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
    
  },
  imageContainer:{
    alignItems: 'center',
  },
  image:{
    width: 49, 
    resizeMode: 'contain',
  },
  subtitle:{
    textAlign: 'center',
    fontFamily: fonts.regular,
    fontSize: 10
  },
  greenLine:{
    height: 5,
    width: '100%',
    backgroundColor: 'green',
    marginTop: 4,
  },

  noLine:{
    height: 5,
    width: '100%',
    marginTop: 4,
  },

  selectedImageContainer: {
    borderColor: 'blue',
    borderWidth: 2,
  },

});

