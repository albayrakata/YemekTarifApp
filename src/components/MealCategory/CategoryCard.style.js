import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        borderWidth: 1,
        flexDirection: 'row',
        padding: 5,
        margin:5,
        backgroundColor:'#edeff1',
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30



    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
       
    },
    cat_name: {
        fontSize:20,
        marginTop:35,
        marginLeft:20
        
    }
})