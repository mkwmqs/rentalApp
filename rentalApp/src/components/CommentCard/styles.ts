import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  wrapper:{
    maxWidth:'40%',
    margin:16,
    justifyContent:'space-between'

  },  
  container: {
    borderWidth:1,
    borderRadius:4,
    borderColor:'gray',
    padding:8
  },
  content: {
    marginTop:24,
    flex:1,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
   
  },
  thumbnail: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 50,
  },
  text: {
    fontFamily: fonts.desription,
    fontSize: 14,
  },
  subtext: {
    fontFamily: fonts.thin,
    fontSize: 10,
  },
  textFormat:{
    justifyContent:'center',
    alignItems:'center'
  }
});
