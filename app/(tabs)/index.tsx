import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
        <Link href={"../(modals)/login"}>go to login</Link>
        <Link href={"../listing/4545"}>detail page</Link>
        <Link href={"../(modals)/booking"}>dbooking page</Link>
    </View>
  )
}

export default Page