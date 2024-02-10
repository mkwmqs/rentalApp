import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  radioGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  radioRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  radioText: {
    fontFamily: fonts.desription,
    fontSize: 16,
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal:10
  },
  radioSelected:{
    backgroundColor:'black',
    height:13,
    width:13,
    alignSelf:'center',
    marginVertical:2,
    borderRadius:20
  }


});
