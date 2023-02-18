
import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import axios from "axios";
import Config from "react-native-config";
import Detail from "../../components/DetailCard/Detail";
import { Linking } from "react-native";

const MealDetail = ({ route }) => {
    const { strMeal } = route.params;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data: responseData } = await axios.get(Config.API_URL2 + strMeal);
        setData(responseData.meals);
    }
  

    const renderMeal = ({ item }) => <Detail detail={item} onPress={()=> Linking.openURL(item.strYoutube)}  />

    return (

        <FlatList
            keyExtractor={item => item.idMeal}
            data={data}
            renderItem={renderMeal}
        />

    )
}
export default MealDetail;