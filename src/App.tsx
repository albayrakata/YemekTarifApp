import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealCategory from "./pages/MealCategory";
import Meal from "./pages/Meal";
import MealDetail from "./pages/MealDetail";
const Stack = createNativeStackNavigator();
function App (){
  return(
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="MealCategory" component={MealCategory}
        options={{
          title:"Categories",
          headerTitleStyle:{color:'#ffa500'},
          
         }}
    
    />
    <Stack.Screen name="Meal"
     component={Meal}
     options={{
      title:"Meals",
      headerTitleStyle:{color:'#ffa500'},
      
     }}
    />

<Stack.Screen name="MealDetail"
     component={MealDetail}
     options={{
      title:"Meal Detail",
      headerTitleStyle:{color:'#ffa500'},
      
     }}
    />
  </Stack.Navigator>
</NavigationContainer>
  )
}
export default App;