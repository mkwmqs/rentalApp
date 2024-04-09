import { StyleSheet } from "react-native";
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

  forwardButton:{
    marginTop: 72,
    marginBottom: 160,
  },

  header:{
    fontFamily: fonts.medium,
    fontSize: 32,
    textAlign: 'center',
    paddingHorizontal: 30
  },

  paragraphDefault:{
    fontFamily: fonts.light,
    fontSize: 16,
    marginTop: 48
  },

  paragraphDoubleSpaced:{
    fontFamily: fonts.light,
    fontSize: 16,
    marginTop: 72
  },

  compareButton:{
    marginTop: 32,
    width: '80%',
    alignSelf: 'center'
  },

  vehicleBox:{
    marginTop: 32
  },

  estimateResultIncomeContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48
  },
  
  estimateResultIncomeBox:{
    ...generateBoxShadowStyle(0, 0, '#0000001A', 20, 10, 16, '#0000001A'),
    marginTop: 0,
    width: '80%',
    height: 62,
    backgroundColor: color.green_background,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },

  estimateResultIncomeAmount:{
    fontFamily: fonts.title,
    fontSize: 36,
    textAlign: 'center',
    ...generateBoxShadowStyle(0, 4, 'rgba(0, 0, 0, 0.25)', 20, 10, 16, 'rgba(0, 0, 0, 0.25)'),
  },
  


  getAwareTouch:{
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: 16
  },

  getAwarePriceLink:{
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: 32,
    fontSize: 16,
    fontFamily: fonts.light
  },

  shapeDefaults: {
    marginTop: 32,
    padding: 12,
    width: '100%',
    minHeight: 64,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#0000001A',
    borderRadius: 10,  
    backgroundColor: 'white',
    ...generateBoxShadowStyle(0, 0, '#0000001A', 20, 1, 16, '#0000001A'),  
  },

  shapeSingleBox:{
    marginTop: 16
  },

  shapeFlexMessage: {
    marginTop: 32,
    padding: 24,
    
    width: '99%',
    marginHorizontal: '0.5%',
    minHeight: 64,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#0000001A',
    borderRadius: 10,  
    backgroundColor: '#D9D9D9',
    ...generateBoxShadowStyle(0, 4, 'rgba(0,0,0,0.25)', 3, 3, 3, 'rgba(0,0,0,0.25'),  
  },


  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    marginTop: 16
  },
  
  pricingRowDescription: {
    textAlign: 'left',
    flex: 3, 
    fontFamily: fonts.medium,
    fontSize: 16,
  },

  pricingRowValue: {
    textAlign: 'right',
    flex: 2, 
    fontFamily: fonts.medium,
    fontSize: 16,
  },

  flexMessageText: {
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: 32,
  },

  flexButton:{
    marginTop: 24,
    width: '75%'
  },

  getAwareFlexLink:{
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: 'black',
    marginTop: 16,
    fontSize: 16,
    fontFamily: fonts.light,
    width: '100%'
  },


});
