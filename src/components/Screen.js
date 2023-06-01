import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen = ({
    style,
    headerTranslucent = false,
    barStyle = null,
    children,
    ...rest
}) => {
    const defaultBarStyle = 'dark-content'
    return (
        <View {...rest} style={[styles.screen, {
            backgroundColor: '#fafafa',
            paddingTop: !headerTranslucent ? (Platform.OS == 'android' ? StatusBar.currentHeight : 50) : 0
            // paddingTop: !headerTranslucent ? StatusBar.currentHeight : 0
        }]}>
            <StatusBar translucent backgroundColor='transparent' barStyle={barStyle ? barStyle : defaultBarStyle} />
            <View style={[{
                flex: 1,
                backgroundColor: '#fafafa',
            }, style]}>
                {children}
            </View>
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
      }
})