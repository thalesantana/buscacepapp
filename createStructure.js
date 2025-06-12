const fs = require('fs');
const path = require('path');

const filesToCreate = [
  'assets/location_logo.png',
  'src/controller/CepController.ts',
  'src/model/CepModel.ts',
  'src/view/SplashScreen.tsx',
  'src/view/HomeScreen.tsx',
  'src/view/styles/SplashScreen.styles.ts',
  'src/view/styles/HomeScreen.styles.ts',
  'src/AppNavigator.tsx'
];

// Criação dos arquivos e diretórios
filesToCreate.forEach(file => {
  const dir = path.dirname(file);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, '', 'utf8');
  console.log(`✅ Criado: ${file}`);
});
