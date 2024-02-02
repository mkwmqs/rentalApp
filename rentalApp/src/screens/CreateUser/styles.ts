import { StyleSheet } from "react-native";
import color from "../../styles/color";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    
    marginTop: '8%',
    padding:2
    

  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  content: {
    marginTop: 18,
    padding: 8,
    width: '100%',
    marginBottom: 84,
  },
  formWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 12,
    width: '100%',
  },
  header: {
    fontFamily: fonts.title,
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    fontFamily: fonts.desription,
    fontSize: 14,
    paddingHorizontal: 4,
  },
  input: {
    borderColor: color.light_grey,
    borderWidth: 1,
    height: 40,
    width: '100%',
    borderRadius: 8,
    padding: 8,
    
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
  },
  eyeIcon: {
    padding: 5,
  },
});
