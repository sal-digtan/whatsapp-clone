import React, { useState } from 'react'
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

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
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#008069', height: verticalScale(100), justifyContent: "flex-end" }}
    />
);

const Main = () => {
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
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }
})

export default Main