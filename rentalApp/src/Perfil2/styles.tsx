import { StyleSheet } from "react-native";
import fonts from "../styles/fonts";
import color from "../styles/color";
import Icon from 'react-native-vector-icons/FontAwesome';



export const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 15,
    gap: 18,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 25,
    marginBottom: 8,
    
  },
  info: {
    fontSize: 16,
    marginLeft: 10,
  },
  confirmIcon: {
    fontSize: 18,
    color: 'red',
  },
  confirmIcons: {
    fontSize: 14,
    color: 'black',
  },
  card: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginBottom: 10
    
  },
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  fim: {
    marginLeft: 10,
    padding: 10
  },
  button: {
    backgroundColor: '#63E1FD',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: color.unfocus,
    marginVertical: 20,
},
});
 