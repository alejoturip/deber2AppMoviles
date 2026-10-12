import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { epn } from '@/constants/epn-theme';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Página no encontrada' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Volver al inicio
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: epn.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: epn.colors.text,
  },
});
