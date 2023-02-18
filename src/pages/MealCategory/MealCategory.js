
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Config from "react-native-config";
import axios from "axios";
import CategoryCard from "../../components/MealCategory/CategoryCard";

const MealCategory = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data: resposnseData } = await axios.get(Config.API_URL);
        setData(resposnseData.categories);
    }
    const handleSelect = strCategory => {
        navigation.navigate("Meal",{strCategory})
    }

    const renderCategory = ({ item }) => <CategoryCard category={item} onSelect={()=>handleSelect(item.strCategory)} />;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={item => item.idCategory}
                data={data}
                renderItem={renderCategory}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa500'
    }
})
export default MealCategory;