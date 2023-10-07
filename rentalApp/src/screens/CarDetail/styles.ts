import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
export const styles = StyleSheet.create({
  carousel: {
    alignItems: "center",
    marginBottom: 16,
  },
  descriptionRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:12,
    margin:0
  },
  comments: {
    fontFamily: fonts.desription,
    fontSize: 18,
  },
  header: {
    fontFamily: fonts.title,
    fontSize: 24,
    color: color.texting,
   
  },
  subtitle:{
    fontFamily:fonts.desription,
    fontSize:14
  },
  line:{
    width: '100%',
    height: 1,    
    backgroundColor: color.unfocus,
    marginVertical:18
  },
  thumbnail:{
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  descriptionTitle:{
    fontFamily:fonts.desription,
    fontSize:18
  },
  descriptionBox:{
    width:'80%',
    paddingHorizontal:22,
  },

});
