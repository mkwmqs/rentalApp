import { Platform, StyleSheet } from "react-native";
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

  sectionContainer:{
    marginTop: 24
  },
  
  sectionTitle:{
    fontFamily: fonts.medium,
    fontSize: 16
  },

  quantityQuestion:{
    marginTop: 24, 
    paddingHorizontal: 16
  },

  forwardButton:{
    marginTop: 32,
    marginBottom: 160,
  },

  header:{
    fontFamily: fonts.semibold,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 30
  },

  subtitle:{
    fontFamily: fonts.semibold,
    fontSize: 10,
    textAlign: 'center',
    alignContent: 'center',
    paddingHorizontal: 30,
    marginTop: 24
  },

  carsImages:{
    marginTop: 16,   
  },

  justificationContainer:{
    padding: 16,    
    marginTop: 24,
  },
  
  justificationText:{
    padding: 12,
    borderWidth: 0.5,
    borderColor: '#0000001A',
    borderRadius: 10,  
    textAlignVertical: 'top',
    backgroundColor: 'white',
    height: 100,

    
    ...generateBoxShadowStyle(0, 0, '#0000001A', 20, 1, 16, '#0000001A'),  
  },

  keyboardExcess:{
    height: Platform.OS === 'ios' ? 220 : 0,
  },

  inputMainContainer: {
    flex: 1,
  },


});
