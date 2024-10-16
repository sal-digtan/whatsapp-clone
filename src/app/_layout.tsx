import React, { useState } from 'react'
import { Redirect, Stack } from 'expo-router'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PhoneContext } from '../context/PhoneContext';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [country_Code, setCountry_Code] = useState("")

    const [phone_Number, setPhone_Number] = useState("")

    console.log(country_Code, phone_Number);

    const [isLogin, setIsLogin] = useState(false)

    const [loaded, error] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }



    return (
        <>
            {/* <PhoneContext value={{ setCountry_Code, setPhone_Number }}> */}
            <Stack screenOptions={{ headerShown: false }} />
            {isLogin ? <Redirect href={"/(main)"} />
                : <Redirect href={"/(auth)"} />}
            {/* </PhoneContext> */}
        </>
    )
}

export default RootLayout
