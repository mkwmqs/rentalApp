import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { generateBoxShadowStyle } from "../../styles/boxShadow";


export const styles = StyleSheet.create({

  addOnsContainer:{
    flex: 1,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap:'wrap'
  },
  
  addOnsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  imageOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 24,
    height: 24,
    margin: 4,
    marginRight: 8
  },

  addOnFirstColumn:{
    //i deleted right margin as i changed justifyContent to space-evenly on addOnsContainer
    //do not forget to (re)change to justifyContent to center on addOnsContainer if margin right gets set
    //it would aldo be necessary to make an adjustment to the case when theres only one picture in a row
    //marginRight: 24,
  },

  shapeDefaults: {
    width: 145,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    //color: 'black', shapeDefaults is shared with Image obj which doesnt have color as a valid key
    borderWidth: 0.5,
    borderColor: '#0000001A',
    borderRadius: 10,  
    backgroundColor: 'white',
    ...generateBoxShadowStyle(0, 0, '#0000001A', 20, 1, 16, '#0000001A'),  
  },

  textDefaults: {
    fontSize: 16,
    color: 'black',
    fontFamily: fonts.medium,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    textAlign: 'center',
  },

  imagePreview: {
    resizeMode:'stretch',
    opacity: 0.3,
  },

  overlayTextContainer: {
    position: 'absolute', // Position text absolutely to overlay it on the image
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },


  });

