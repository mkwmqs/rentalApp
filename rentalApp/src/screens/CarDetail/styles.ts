import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import color from "../../styles/color";
export const styles = StyleSheet.create({
  carousel: {
    alignItems: "center",
    marginBottom: 16,
  },
  descriptionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 24,
    margin: 0,
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
  subtitle: {
    fontFamily: fonts.desription,
    fontSize: 14,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: color.unfocus,
    marginVertical: 18,
  },
  thumbnail: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 50,
  },
  descriptionTitle: {
    fontFamily: fonts.desription,
    fontSize: 18,
  },
  descriptionBox: {
    width: "80%",
    paddingHorizontal: 22,
  },
  ratingBox: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontFamily: fonts.desription,
    fontSize: 12,
  },
  barContainer: {
    width:'60%',
    marginHorizontal:32,
    paddingLeft:10
  },
  commentCard:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  lightButton:{
    marginHorizontal:28,
    justifyContent:'center',
  
  }
});
