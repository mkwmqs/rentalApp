import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:8,
    borderWidth:2,
    borderColor:'gray',
    borderRadius:8
  },
  text: {
    fontFamily: fonts.desription,
    fontSize: 14,
  },
});
