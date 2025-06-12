export interface CepData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface GeoLocation {
  lat: string;
  lon: string;
}

export async function fetchCepData(cep: string): Promise<CepData> {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!response.ok) throw new Error('Erro ao buscar CEP');
  return await response.json();
}

export async function fetchGeolocation(address: string): Promise<GeoLocation> {
  const encoded = encodeURIComponent(address);
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encoded}`);
  const data = await response.json();
  if (!data || data.length === 0) throw new Error('Geolocalização não encontrada');
  return { lat: data[0].lat, lon: data[0].lon };
}
 