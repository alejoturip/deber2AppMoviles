# StickerSmash

App del tutorial oficial de Expo (Expo SDK 57, Expo Router, TypeScript). Elige una foto, agrega un sticker, muévelo y agrándalo con gestos, y guarda la imagen. Corre en Android, iOS y web.

## Cómo correrla

```bash
npm install
npx expo start
```

- Android/iOS: escanea el QR con Expo Go.
- Web: presiona `W` en la terminal.
- Revisar tipos: `npm run typecheck`

## Estructura

- `src/app`: rutas (Expo Router). `(tabs)` tiene Home y About.
- `src/components`: `button`, `circle-button`, `icon-button`, `image-viewer`, `emoji-picker`, `emoji-list`, `emoji-sticker`.
- `assets/images`: imágenes del tutorial.

## Librerías

expo-router, expo-image, expo-image-picker, expo-media-library, react-native-gesture-handler, react-native-reanimated, react-native-view-shot, dom-to-image, @expo/vector-icons, expo-status-bar, expo-splash-screen.
