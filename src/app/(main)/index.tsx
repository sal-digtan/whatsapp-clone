import imagesPath from '@/src/constants/imagesPath';
import React, { useState } from 'react'
import { View, useWindowDimensions, StyleSheet, Text, Pressable, Image } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Menu, MenuItem } from 'react-native-material-menu';


const Main = () => {

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    );


    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const renderTabBar = props => (
        <View style={styles.tab_barcontainer}>
            <View style={styles.tab_bar}>
                <Text>WhatsApp</Text>
                <Pressable><Image source={imagesPath.search_icon} resizeMode='contain' /></Pressable>
                <Menu
                    visible={visible}
                    anchor={<Pressable onPress={showMenu}><Image source={imagesPath.kebab_menu} resizeMode='contain' /></Pressable>}
                    onRequestClose={hideMenu}
                >
                    <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
                    <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
                    <MenuItem onPress={hideMenu}>Menu item 3</MenuItem>
                </Menu>
            </View>
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ backgroundColor: '#008069', height: verticalScale(100), justifyContent: "center" }}
            />
        </View>
    );

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'CHATS' },
        { key: 'second', title: 'STATUS' },
        { key: 'third', title: 'CALLS' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    tab_bar: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#008069'
    },
    tab_barcontainer: {
        backgroundColor: '#008069',
        height: verticalScale(100),
        justifyContent: "flex-start"
    }
})

export default Main

