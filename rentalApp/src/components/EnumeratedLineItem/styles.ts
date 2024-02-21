import { Platform, StyleSheet } from "react-native";
import fonts from '../../styles/fonts';



export const styles = StyleSheet.create({


  enumeratorItemContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: 16
  },
  enumeratorItemIcon: {
    fontSize: 20,
    marginRight: 4,
    
  },
  enumeratorItemText: {
    flex: 1,
    fontSize: 13,
    fontFamily: fonts.light,
    lineHeight: 24,
  },

});




