import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { epn } from '@/constants/epn-theme';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.brandMark}>
        <FontAwesome name="university" size={34} color={epn.colors.text} />
        <Text style={styles.brandInitials}>EPN</Text>
      </View>
      <Text style={styles.title}>Escuela Politécnica Nacional</Text>
      <Text style={styles.subtitle}>Escuela de Formación de Tecnólogos</Text>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>StickerSmash EPN</Text>
        <View style={styles.detailRow}>
          <FontAwesome name="book" size={20} color={epn.colors.accentOnDark} />
          <View style={styles.detailText}>
            <Text style={styles.detailLabel}>Asignatura</Text>
            <Text style={styles.detailValue}>Desarrollo de Aplicaciones Móviles</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome name="user" size={20} color={epn.colors.accentOnDark} />
          <View style={styles.detailText}>
            <Text style={styles.detailLabel}>Estudiante</Text>
            <Text style={styles.detailValue}>Alejo</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: epn.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: epn.spacing.md,
  },
  brandMark: {
    width: 96,
    height: 96,
    borderRadius: epn.radius.pill,
    borderWidth: 2,
    borderColor: epn.colors.accent,
    backgroundColor: epn.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: epn.spacing.md,
  },
  brandInitials: {
    color: epn.colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginTop: epn.spacing.sm,
  },
  title: {
    color: epn.colors.text,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: epn.colors.textMuted,
    fontSize: 16,
    textAlign: 'center',
    marginTop: epn.spacing.sm,
  },
  infoCard: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: epn.colors.primary,
    borderRadius: epn.radius.md,
    borderLeftWidth: 3,
    borderLeftColor: epn.colors.accent,
    padding: epn.spacing.md,
    marginTop: epn.spacing.lg,
  },
  sectionTitle: {
    color: epn.colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: epn.spacing.md,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: epn.spacing.sm,
  },
  detailText: {
    flex: 1,
    marginLeft: epn.spacing.md,
  },
  detailLabel: {
    color: epn.colors.textMuted,
    fontSize: 14,
  },
  detailValue: {
    color: epn.colors.text,
    fontSize: 16,
    marginTop: 2,
  },
});
