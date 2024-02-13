import React from 'react';
import { View, Text } from 'react-native';


function MealDetailScreen ({route}) {
  const mealTitle = route.params.mealTitle;
  return (
    <View>
      <Text>Meal Detail Screen {mealTitle}</Text>
    </View>
  )
};

export default MealDetailScreen;