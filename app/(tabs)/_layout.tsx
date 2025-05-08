import { Tabs } from 'expo-router';
import React from 'react';

import SearchUserComponent from '@/components/home/SearchUserComponent';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
     <Tabs
     screenOptions={{
      tabBarStyle: { display: 'none' }, // Oculta la barra de tabs
    }}

      /* screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }} */>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          headerRight: () => (
            <SearchUserComponent />
          ),
        }}
      />
      <Tabs.Screen
        name="detail"
        options={{
          title: 'Detalle del usuario',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs> 
  );
}
