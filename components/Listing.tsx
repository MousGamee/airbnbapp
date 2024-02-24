import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

interface Props {
    listings : any[],
    category : string
}

const Listing = ({ listings, category}: Props) => {
    useEffect(() => {
     console.log('reload list')
    }, [category])
    
  return (
    <View>
      <Text>Listing</Text>
    </View>
  )
}

export default Listing