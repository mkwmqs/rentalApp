import { StyleSheet } from "react-native";
import color from "../../styles/color";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'flex-start',
    marginVertical:64,
    marginHorizontal:36
  },
  scrollViewContainer:{
    flexGrow:1,
  },
    content:{
    marginTop:18,
    borderWidth: 1,
    borderColor: color.light_grey, 
    borderRadius: 10,
    padding: 10, 
    width:'100%',
    marginBottom:84
  },
  formWrapper:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:12,
    width:'100%',
  },
  header:{
    fontFamily:fonts.title,
    fontSize:18,
    marginBottom:20,
  },
  text:{
    fontFamily:fonts.desription,
    fontSize:14,
    paddingHorizontal:4,
  },
  input:{
    borderColor: color.light_grey,
    borderWidth: 1,
    height:40,
    width:'100%',
    borderRadius:8,
    padding:8,
    marginBottom:20,
  },
  checkboxContainer:{
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin:0,
  }
})