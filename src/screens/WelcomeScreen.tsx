import React from 'react';
import { Image, StatusBar, View } from 'react-native';

const AMY_LOGO = require('../../assets/images/logos/welcome_logo_sin_fondo.png');

export default function WelcomeScreen() {
    return (
        <View className="flex-1 bg-amy-crema justify-center items-center">
            <StatusBar barStyle="light-content" backgroundColor="#5B2C6F" />
            <Image
                source={AMY_LOGO}
                className="w-80 h-80" 
                resizeMode="contain"
            />
        </View>
    );
}