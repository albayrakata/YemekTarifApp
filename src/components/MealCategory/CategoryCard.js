
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, Touchable, TouchableWithoutFeedback, View } from "react-native";
import styles from './CategoryCard.style'



const CategoryCard = ({ category, onSelect }) => {


    return (
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
            <Text style={styles.cat_name}>{category.strCategory}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}


export default CategoryCard;