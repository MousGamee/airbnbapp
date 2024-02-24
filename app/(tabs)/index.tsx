import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import listingsData from '@/assets/data/airbnb-listings.json';
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listing from '@/components/Listing';

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const getoItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
       <Stack.Screen options={{
         header : () => <ExploreHeader onCategoryChanged={onDataChanged}/>
       }}/>
       <Listing listings={[]} category={category}/>
    </View>
  )
}

export default Page