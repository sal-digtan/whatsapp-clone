import React, { useState } from 'react'
import { Redirect, Stack } from 'expo-router'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PhoneContext } from '../context/PhoneContext';

SplashScreen.preventAutoHideAsync();

const RootLayout = (props: any) => {
    const [country_Code, setCountry_Code] = useState<any>("")

    const [phone_Number, setPhone_Number] = useState<any>("")

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
            {/* <PhoneContext.Provider value={{ country_Code, phone_Number, setCountry_Code, setPhone_Number }}> */}
            {/* {props.childern} */}
            <Stack screenOptions={{ headerShown: false }} />
            {isLogin ? <Redirect href={"/(main)"} />
                : <Redirect href={"/(auth)"} />}
            {/* </PhoneContext.Provider> */}
        </>
    )
}

export default RootLayout
