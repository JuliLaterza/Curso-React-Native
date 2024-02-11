import { View, FlatList,Text, StyleSheet } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen ({ route }) {
  const catId = route.params.categoryId;
  
  const displayedMeals = MEALS.filter((mealItem) => {
    //console.log('catId:', catId);
    //console.log('mealItem.categoryIds:', mealItem.categoryIds);
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    console.log('itemData:', itemData); // Imprime todo el objeto itemData
    //console.log('title:', itemData.item.title);
    return (
      <MealItem 
      title={itemData.item.title}
      imageUrl={itemData.item.imageUrl}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      />
    );
  }

  //console.log("Ingrese a la pantalla de MealsOverviewScreen", catId)
  //console.log("displayedMeals:", displayedMeals)

  return (
    <View>
      <FlatList 
      data={displayedMeals}
      keyExtractor={(item) => item.id} 
      renderItem={renderMealItem}
      />
    </View>
  )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});