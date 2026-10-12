import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { epn } from '@/constants/epn-theme';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Elige un sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color={epn.colors.text} size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: epn.colors.background,
    borderTopRightRadius: epn.radius.md,
    borderTopLeftRadius: epn.radius.md,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: epn.colors.surface,
    borderTopRightRadius: epn.radius.sm,
    borderTopLeftRadius: epn.radius.sm,
    paddingHorizontal: epn.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: epn.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
