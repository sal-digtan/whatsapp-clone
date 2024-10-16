import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import imagesPath from '@/src/constants/imagesPath';
import ButtonComp from '@/src/components/ButtonComp';
import { router } from 'expo-router';

const TermsAgree = () => {

    const onAgree = () => {
        router.push("/(auth)/login")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
                <Image source={imagesPath.welcome_img} resizeMode='contain' style={styles.welcome_img} />
                <Text style={styles.termstext_container}>Read our <Text style={styles.privacy_text}>Privacy Policy.</Text> Tap “Agree and continue” to
                    accept the <Text style={styles.terms_text}>Teams of Service.</Text></Text>
                <View style={styles.button_view}>
                    <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree} />
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.from_text}>From</Text>
                <Text style={styles.facebook_text}>Facebook</Text>
            </View>
        </View>
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
    header: {
        alignItems: "center",
    },
    footer: {
        alignItems: "center",
    },
    welcome_text: {
        fontSize: moderateScale(30),
        color: "#000",
        fontWeight: "bold",
        marginTop: moderateScale(84),
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
    termstext_container: {
        textAlign: "center",
        fontSize: moderateScale(13),
        color: "#000",
        paddingHorizontal: moderateScale(30),
    },
    privacy_text: {
        color: "#0C42CC",
    },
    terms_text: {
        color: "#0C42CC",
    },
    welcome_img: {
        marginTop: moderateScale(38),
        marginBottom: moderateScale(55),
    },
    button_view: {
        width: moderateScale(300),
    }
})

export default TermsAgree