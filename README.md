Aplicativo para criar turmas, cada turma possui 2 times.

1. Instale as dependências

   ```bash
   npm install
   ```

2. Inicie o aplicativo

   ```bash
    npx expo start
   ```


Notas do estudo.
--Instalado babel plugin module resolver para resolver importações.
- No arquivo de config do babel criar os alias para as importações:
   plugins: [
		[
         "module-resolver",
         {
            alias: {
               "@assets": "./src/assets",
               "@components": "./src/components",
               "@routes": "./src/routes",
               "@screens": "./src/screens",
               "@storage": "./src/storage",
               "@theme": "./src/theme",
               "@utils": "./src/utils",
            },
         }
      ]
   ]
- No arquivo tsconfig.json em compilerOptions foi adicionado os caminhos:
   "baseUrl": "./",
   "paths": {
      "@assets/*": [
        "../src/assets/*"
      ],
      "@components/*": [
        "../src/components/*"
      ],
      "@routes/*": [
        "../src/routes/*"
      ],
      "@screens/*": [
        "../src/screens/*"
      ],
      "@storage/*": [
        "../src/storage/*"
      ],
      "@theme/*": [
        "../src/theme/*"
      ],
      "@utils/*": [
        "../src/utils/*"
      ],
      "@/*": [
        "./*"
      ]
   }

   -- Styled Components
   - Para react native o Styled Components mudou: 
   Antes: npm install styled-components
   Depois: npm install --save-dev @types/styled-components-react-native

   -- Rotas
   - Usar o React-Native-Screens com o Safe Area Context
   npx expo install react-native-screens react-native-safe-area-context
   npm install @react-navigation/native-stack

   -- Armazenamento
   -Usar o AsyncStorage
   npx expo install @react-native-async-storage/async-storage