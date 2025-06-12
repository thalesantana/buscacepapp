import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles/SplashScreen.styles';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/location_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao LocalizaCEP</Text>
    </View>
  );
}
 