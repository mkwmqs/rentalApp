import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { generateBoxShadowStyle } from "../../styles/boxShadow";


export const styles = StyleSheet.create({
  boxes:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },

  touchable:{
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: 232,
    height: 82,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    ...generateBoxShadowStyle(0, 0, '#0000001A', 20, 10, 16, '#0000001A'), 

  },

  selectedTouchable:{
    backgroundColor: color.green_background
  },


  title:{
    fontFamily: fonts.medium,
    fontSize: 14,
    textAlign: 'center'
    
  },

  textContainer:{
    padding: 16
  },

  makeModel:{
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: 14,
    lineHeight: 17
  },

  plate:{
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.light,
    lineHeight: 17
  },


  greenLine:{
    height: 5,
    width: '100%',
    backgroundColor: 'green',
    marginTop: 8,
  },

  selectedImageContainer: {
    borderColor: 'blue',
    borderWidth: 2,
  },

});

