
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import Config from "react-native-config";
import axios from "axios";
import MealsCard from "../../components/Meals/MealsCard";
import { useNavigation } from "@react-navigation/native";

const Meal = ({ route,navigation }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    
    const { strCategory } = route.params;

    const fetchData = async () => {
        const { data: responseData } = await axios.get(Config.API_URL2 + strCategory);
        setData(responseData.meals);
    }
    const handleSelect =strMeal=>{
        navigation.navigate('MealDetail',{strMeal})
    }

    const renderMeal = ({ item }) => <MealsCard meal={item}  onSelect={()=>handleSelect(item.strMeal)}/>;
    return (
        <SafeAreaView style={stlyes.container}>
            <FlatList
                keyExtractor={item => item.idMeal}
                data={data}
                renderItem={renderMeal}
            />
        </SafeAreaView>
    )
}
const stlyes = StyleSheet.create({

})
export default Meal;