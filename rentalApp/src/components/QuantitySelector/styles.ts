import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";

export const styles = StyleSheet.create({
    
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  
  touchables:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  modifier:{
    paddingHorizontal: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,    
  },

  title:{
    marginRight: 'auto',
    fontFamily: fonts.light,
    fontSize: 16
  },
  
  quantityBox:{
    paddingHorizontal: 12,

  },

   
  });

