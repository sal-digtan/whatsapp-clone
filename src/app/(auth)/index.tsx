import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagesPath from '@/src/constants/imagesPath'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';

const Auth = () => {

    const [isLoading, setIsLoading] = useState(false)

    let navigativeWelcome = () => {
        router.push("/(auth)/terms_agree")
    }

    let loadingTimer = () => {
        setIsLoading(true)
        setTimeout(navigativeWelcome, 3000)
    }

    useEffect(() => {
        const timeout = setTimeout(loadingTimer, 2000);
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Image source={imagesPath.login_logo} resizeMode='contain' style={styles.logo_style} />
                <Text style={styles.whatsapp_text}>WhatsApp</Text>
            </View>
            <View style={styles.footer}>
                {
                    isLoading ?
                        <>
                            <ActivityIndicator color={"#00A884"} size={moderateScale(46)} />
                            <Text style={styles.loading_text}>Loading...</Text>
                        </>
                        :
                        <>
                            <Text style={styles.from_text}>From</Text>
                            <Text style={styles.facebook_text}>Facebook</Text>
                        </>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: verticalScale(50),
        backgroundColor: "#fff",
    },
    header: {},
    body: {
        alignItems: "center",
        gap: verticalScale(10),
    },
    footer: {
        alignItems: "center",
        height: verticalScale(80),
        justifyContent: "flex-end",
    },
    from_text: {
        color: "#867373",
        fontSize: moderateScale(12),
        fontFamily: "Roboto_400Regular",
    },
    facebook_text: {
        textTransform: "uppercase",
        color: "#000",
        fontSize: moderateScale(15),
        fontFamily: "Roboto_400Regular",
    },
    logo_style: {
        width: moderateScale(70),
        height: moderateScale(70),
        borderRadius: moderateScale(10),
    },
    whatsapp_text: {
        fontSize: moderateScale(35),
        color: "#000",
        fontWeight: "medium",
        fontFamily: "Roboto_500Medium",
    },
    loading_text: {
        fontSize: moderateScale(24),
        color: "#00A884",
        marginTop: verticalScale(15),
    }
})

export default Auth