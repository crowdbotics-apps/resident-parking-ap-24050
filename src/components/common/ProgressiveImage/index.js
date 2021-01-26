import React, { useState } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
export default (props) => {
    const [loading, setLoading] = useState(true)
    const [fadeAnim] = useState(new Animated.Value(0))
    const { source, style, loaderColor, loaderBackgroundStyle } = props

    const onLoadEnd = () => {
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, delay: 5, useNativeDriver: true }).start();
        setLoading(false)
    }
    return (
        <>
            <View style={style}>
                <Animated.View
                    style={[style, { opacity: fadeAnim }]}
                >
                    <FastImage
                        source={source}
                        style={style}
                        resizeMode={FastImage.resizeMode.cover}
                        onLoadEnd={() => { onLoadEnd() }} />
                </Animated.View>

            </View>
        </>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});