import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    body_container: {
     
    
        alignItems:'center',
        backgroundColor:'white'
      

    },
    container: {
        backgroundColor: '#ffa500'

    },
    image: {
        width:Dimensions.get('screen').width/1,
        height:Dimensions.get('screen').height/3,
        borderRadius: 30,
        justifyContent:'center'

    },
    meal_name: {
    fontSize:30,
    backgroundColor:'#ffa500',
    color:'white',
    padding:15,
    opacity:0.7


    },
    meal_container:{
      
     


}

  
})