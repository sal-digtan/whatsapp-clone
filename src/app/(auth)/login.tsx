import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import imagesPath from '@/src/constants/imagesPath';
import { Menu, MenuItem } from 'react-native-material-menu';
import CountryPicker from 'rn-country-dropdown-picker';
import ButtonComp from '@/src/components/ButtonComp';
import countryCodes from '@/src/constants/countryCodes';
import { router } from 'expo-router';
import { PhoneContext } from '../../context/PhoneContext';



const Login = () => {

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const [countryCode, setCountryCode] = useState("")

    const [phoneNumber, setPhoneNumber] = useState("")

    const { setCountry_Code, setPhone_Number }: any = useContext(PhoneContext)

    function handleSelection(e: any) {
        console.log(e);
        setCountryCode(e.country)
        // setCountry_Code(e.country)
    }

    console.log("code", countryCode);

    const [modalVisible, setModalVisible] = useState(false);


    const navigateOTP = () => {
        if (phoneNumber && countryCode !== "") {
            router.push("/(auth)/verify_otp")
        }
    }

    const modalTimer = () => {
        if (phoneNumber && countryCode !== "") {
            setModalVisible(true)
            setTimeout(navigateOTP, 3000)
        } else {
            setModalVisible(false)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(modalTimer, 3000);
        return () => {
            clearTimeout(timeout)
        }
    }, [])



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_contents}>
                    <Text style={styles.enter_text}>Enter your phone number</Text>
                    <Menu
                        visible={visible}
                        anchor={<TouchableOpacity onPress={showMenu}><Image source={imagesPath.kebab_menu} resizeMode='contain' /></TouchableOpacity>}
                        onRequestClose={hideMenu}
                    >
                        <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
                        <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
                        <MenuItem onPress={hideMenu}>Menu item 3</MenuItem>
                    </Menu>
                </View>
                <Text style={styles.verify_text}>WhatsApp will need to verify your phone number.
                    <Text style={styles.verify_link}>What’s my number?</Text></Text>
                <View style={styles.country_select}>
                    <CountryPicker
                        InputFieldStyle={styles.ContainerStyle}
                        // DropdownContainerStyle={styles.myDropdownContainerStyle}
                        DropdownRowStyle={styles.myDropdownRowStyle}
                        Placeholder="Choose your country ..."
                        DropdownCountryTextStyle={styles.myDropdownCountryTextStyle}
                        countryNameStyle={styles.mycountryNameStyle}
                        flagSize={24}
                        selectedItem={handleSelection}
                    />
                    <View style={styles.country_code}>
                        {countryCode !== "" ? countryCodes.filter(item => item.name === countryCode).map((item, index) =>
                            <View key={index} style={styles.code_text}><Text>{item.dial_code}
                            </Text>
                            </View>
                        )
                            : <View style={styles.code_text}><Text>+ 1</Text></View>
                        }
                        <View style={styles.phone_number}>
                            <TextInput style={styles.phonenumber_text} keyboardType='numeric'
                                onChangeText={(e) => {
                                    setPhoneNumber(e.replace(/[^0-9]/g, ''));
                                    // setPhone_Number(e.replace(/[^0-9]/g, ''));
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.carrier_container}>
                    <Text style={styles.carrier_text}>Carrier charges may apply</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <ButtonComp title="NEXT" style={{ paddingHorizontal: 20 }} onPress={() => { phoneNumber && countryCode !== "" ? modalTimer() : setModalVisible(false); }} />
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onDismiss={modalTimer}
                        onRequestClose={() => {
                            modalTimer;
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <ActivityIndicator size="large" color="#00F2AA" />
                            </View>
                        </View>
                    </Modal>
                </View>
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
        paddingHorizontal: moderateScale(10),
        alignItems: "center",
        justifyContent: "space-between",
    },
    header_contents: {
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: moderateScale(84),
    },
    footer: {
        alignItems: "center",
    },
    enter_text: {
        fontSize: moderateScale(20),
        color: "#000",
        fontWeight: "medium",
        textAlign: "center",
        paddingHorizontal: moderateScale(30),
        fontFamily: "Roboto_400Regular",
    },
    verify_text: {
        marginTop: moderateScale(35),
        textAlign: "center",
        paddingHorizontal: moderateScale(15),
        fontSize: moderateScale(13),
        fontFamily: "Roboto_400Regular",
    },
    verify_link: {
        color: "#002AC0",
        paddingStart: moderateScale(5),
    },
    country_select: {
        marginTop: moderateScale(66),
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
    },
    mycountryNameStyle: {
        textAlign: "center",
        width: "100%",
        fontSize: moderateScale(14),
        paddingStart: 0,
        fontFamily: "Roboto_400Regular",
    },
    myDropdownCountryTextStyle: {
        fontFamily: "Roboto_400Regular",
    },
    ContainerStyle: {
        borderBottomColor: "#00A884",
        borderBottomWidth: 1,
        fontFamily: "Roboto_400Regular",
    },
    myDropdownRowStyle: {
        padding: 0,
    },
    country_code: {
        marginVertical: moderateScale(20),
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
    },
    code_text: {
        borderBottomColor: "#00A884",
        borderBottomWidth: 1,
        marginStart: moderateScale(6),
        fontFamily: "Roboto_400Regular",
        paddingBottom: moderateScale(3),
    },
    phone_number: {
        borderBottomColor: "#00A884",
        borderBottomWidth: 1,
        marginHorizontal: moderateScale(8),
        width: "85%",

    },
    phonenumber_text: {
        textAlign: "center",
    },
    carrier_container: {
        alignItems: "center",
    },
    carrier_text: {
        fontSize: moderateScale(14),
        fontFamily: "Roboto_400Regular",
        color: "#000",
    },
    // modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: '#535861',
        opacity: 0.72,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})

export default Login