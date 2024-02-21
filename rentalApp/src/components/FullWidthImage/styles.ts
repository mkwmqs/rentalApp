import { StyleSheet } from "react-native";
import fonts from '../../styles/fonts';

export const  styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  overlayText: {
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal : 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    
  },
  textContent: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    fontFamily: fonts.title,
    textAlign: 'center',
  },
})

