import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Keyboard,
  Text,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles/HomeScreen.styles';
import { getGeoLocationFromCep } from '../controller/CepController';

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function HomeScreen() {
  const [cep, setCep] = useState('');
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false); // 👈 novo estado

  const handleSearch = async () => {
    Keyboard.dismiss();
    setLoading(true); // 👈 inicia o loading

    const geo = await getGeoLocationFromCep(cep);

    if (geo) {
      setLocation({ latitude: geo.lat, longitude: geo.lng });
      setAddress({
        logradouro: geo.logradouro,
        bairro: geo.bairro,
        localidade: geo.localidade,
        uf: geo.uf,
      });
    } else {
      setLocation(null);
      setAddress(null);
    }

    setLoading(false); // 👈 finaliza o loading
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <Button title="Buscar localização" onPress={handleSearch} />

      {loading && (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      )}

      {!loading && location && (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location} title="Localização do CEP" />
          </MapView>

          {address && (
            <View style={styles.addressContainer}>
              <Text style={styles.addressText}>Rua: {address.logradouro}</Text>
              <Text style={styles.addressText}>Bairro: {address.bairro}</Text>
              <Text style={styles.addressText}>
                Cidade: {address.localidade} - {address.uf}
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}
 