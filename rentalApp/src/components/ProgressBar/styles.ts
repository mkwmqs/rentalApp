import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  info:{
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
   },
  container: {
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 4,
    margin:8
  },
  bar: {
    height: 20,
    backgroundColor: '#ffcd3c',
    borderRadius: 4,
  },
  text:{
    fontFamily: fonts.desription,
    fontSize: 14,
  }

});