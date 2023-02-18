import React from "react";
import { Image, Text, Touchable, TouchableWithoutFeedback, View } from "react-native";
import styles from './MealsCard.style'

const MealsCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                    <View style={styles.meal_container}>
                        <Text style={styles.meal_name}>{meal.strMeal}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default MealsCard;