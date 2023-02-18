import { StyleSheet ,Dimensions} from "react-native";
export default StyleSheet.create({
    continer:{

    },
    body_container:{
        borderBottomWidth:1,
        borderBottomColor:'#ffa500'

    },
    image:{
        width:Dimensions.get('screen').width/1,
        height:Dimensions.get('screen').height/2,


    },
    meal_name:{
        fontSize:30,
        fontWeight:'bold',
        color:'#a5292a'


    },
    meal_area:{
        fontSize:15,
        fontWeight:'bold',
        color:'#a5292a'

        
    },
    meal_desc:{

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
        margin:30
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

})