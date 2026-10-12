import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { epn } from '@/constants/epn-theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: epn.colors.accentOnDark,
        headerStyle: {
          backgroundColor: epn.colors.background,
        },
        headerShadowVisible: false,
        headerTintColor: epn.colors.text,
        tabBarStyle: {
          backgroundColor: epn.colors.background,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
