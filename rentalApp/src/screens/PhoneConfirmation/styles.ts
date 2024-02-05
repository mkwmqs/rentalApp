import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontFamily: fonts.title,
    fontSize: 24,
    paddingVertical: 14,
  },
  linkChange:{
    fontFamily: fonts.title,
    fontSize:16,
    color:'blue',
    paddingHorizontal:8
  },
  form:{
    width:'100%',
    marginVertical:18,
    paddingHorizontal:8
  },
  input:{
    borderColor: color.light_grey,
    borderWidth: 1,
    height:40,
    width:'100%',
    borderRadius:8,
    padding:8,
    marginVertical:18,
  },
});
