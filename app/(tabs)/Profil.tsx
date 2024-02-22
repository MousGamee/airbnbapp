import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router'

const Profil = () => {
    const {signOut, isSignedIn} = useAuth()
    return (
        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Button title='log out' onPress={() => signOut()} />
            {!isSignedIn && <Link href={'../(modals)/login'} > login </Link>}
        </View>
    )
}

export default Profil