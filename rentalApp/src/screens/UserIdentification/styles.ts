import { StyleSheet } from "react-native";
import fonts from '../../styles/fonts'

export const styles = StyleSheet.create({
container:{
  marginTop:'30%',
  marginHorizontal:24,
  justifyContent:'space-between'
 
},
upperInput:{
  justifyContent:'center',
  marginTop:0,
  paddingHorizontal:8,
  paddingTop:0
},
bottomInput:{
  justifyContent:'center',
  borderBottomRightRadius:5,
  borderBottomLeftRadius:5,
  height:56,
  borderWidth:1,
  borderTopWidth:0,
  marginTop:0,
  paddingHorizontal:8,
  paddingTop:0
},
text:{
  margin:5,

  padding:0,
  flexDirection:'row',
  color:'gray',

},
topContent:{
  margin:0,
  padding:0,
  borderWidth:1,
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
  flexDirection:'column',
  
},
dash:{
  flex: 1, 
  height: 1,
  backgroundColor: 'gray'
},
info:{
  justifyContent:'space-between',
  alignItems:'center',
  margin:16,
  alignContent:'space-between',
   fontFamily:fonts.desription
},
textInfo:{
  color: 'black',
  textAlign: 'justify',

  fontSize: 14,

},
coninue:{
  margin:16,
},
continueButton:{
  backgroundColor:'#63E1FD',
  height:56,
  width:'100%',
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',
  fontWeight:'bold',
   fontFamily:fonts.desription
},
buttonText:{
  color:'white',
  fontSize:20,
  fontWeight:'bold'
},
loginButton:{
  height:56,
  width:'100%',
  borderRadius:15,
  fontSize:14,
  flexDirection:'row',
  alignItems:'center',
  paddingHorizontal:20,
  borderWidth:1,
  margin:8,
   fontFamily:fonts.desription
}
})