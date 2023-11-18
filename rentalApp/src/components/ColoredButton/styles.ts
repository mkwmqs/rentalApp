import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const coloredStyles = (color:string) => StyleSheet.create({
  container:{
    backgroundColor: color,
    padding: 14,
    borderRadius: 8,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontFamily:fonts.title,
    fontSize:12,
    color:'#fff',
    
    
  }
})