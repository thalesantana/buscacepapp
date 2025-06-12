import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles/SplashScreen.styles';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/location_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao LocalizaCEP</Text>
    </View>
  );
}
 