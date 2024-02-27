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

  frequencyQuestionContainer:{
    marginTop: 24
  },

  valuationQuestionContainer:{
    marginTop: 24
  },

  valuationQuestionHeader:{
    fontFamily: fonts.medium,
    fontSize: 16,
    textAlign: 'center'
  },

  valuationDisclaimer:{
    fontFamily: fonts.light,
    fontSize: 12,
    paddingHorizontal: 24,
    marginTop: 16
  },

  currencyContainer:{
    width: 152,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    borderWidth: 0,
    borderColor: 'transparent',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 10, 
    ...generateBoxShadowStyle (0, 0, '#0000001A', 20, 10, 16, '#0000001A'),    
  },

  currencyInput:{
    fontFamily: fonts.medium,
    fontSize: 16,
    textAlign: 'center'
  },

  estimateResultContainer:{
    marginTop: 24
  },

  estimateResultHeader:{
    fontFamily: fonts.medium,
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  estimateResultDisclaimer:{
    fontFamily: fonts.light,
    fontSize: 16,
    marginTop: 24,
    textAlign: 'center'
  },

  estimateResultIncomeContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...generateBoxShadowStyle(0, 0, '#0000001A', 20, 10, 16, '#0000001A'),
  },

  estimateResultIncomeBox:{
    marginTop: 24,
    width: 209,
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
    fontFamily: fonts.semibold,
    fontSize: 28,
    textAlign: 'center'
  },
  
  estimateResultIncomeSubtitle:{
    fontFamily: fonts.light,
    fontSize: 12,
    textAlign: 'center'
  }


});
