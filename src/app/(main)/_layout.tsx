import { Stack } from 'expo-router'
import React from 'react'

const MainStack = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='chatlist' />
            <Stack.Screen name='chatmsg' />
        </Stack>
    )
}

export default MainStack