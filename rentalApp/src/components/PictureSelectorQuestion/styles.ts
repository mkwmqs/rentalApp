import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
import { generateBoxShadowStyle } from "../../styles/boxShadow";


export const styles = StyleSheet.create({

  addOnsContainer:{
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
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
    marginRight: 24,
  },

  shapeDefaults: {
    width: 145,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
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
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }


  });

