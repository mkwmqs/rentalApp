import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  bottomFixed: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#f0f0f0",
    paddingVertical: 34,
    paddingHorizontal: 8,
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  iconItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});
