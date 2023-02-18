import React from "react";
import { Button, Image, Text, View ,Pressable} from "react-native";
import styles from './Detail.style';

const Detail = ({ detail ,onPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body_container}>
                <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
                <Text style={styles.meal_name}>{detail.strMeal}</Text>
                <Text style={styles.meal_area}>{detail.strArea}</Text>
            </View>
            <Text style={styles.meal_desc}>{detail.strInstructions}</Text>

            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Watch on YouTube</Text>
            </Pressable>
        </View>
    )
}
export default Detail;