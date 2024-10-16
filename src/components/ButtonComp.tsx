import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({ title, onPress, style }: any) => {
    return (
        <TouchableOpacity style={[styles.button_container, style]} activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.button_text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button_container: {
        marginTop: moderateScale(24),
        width: "100%",
        alignItems: "center",
        backgroundColor: "#00A884",
        borderRadius: moderateScale(4),
        paddingVertical: verticalScale(8),
    },
    button_text: {
        fontSize: moderateScale(14),
        color: "#fff",
    }
})

export default ButtonComp