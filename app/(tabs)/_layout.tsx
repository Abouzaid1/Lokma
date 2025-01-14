import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Text, View } from 'react-native'
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Search, Home } from 'lucide-react-native';
import TapBarIcon from "../../components/TabBarIcon"
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        animation: 'fade',
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          shadowOffset: {
            width: 0,
            height: 0
          },
          shadowColor: "transparent",
          borderColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarIcon: (props: { focused: boolean; color: string; size: number; }) => <TapBarIcon focused={props.focused} name='explore' />
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          headerShown: false,
          tabBarIcon: (props: { focused: boolean; color: string; size: number; }) => <TapBarIcon focused={props.focused} name='offers' />
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: (props: { focused: boolean; color: string; size: number; }) => <TapBarIcon focused={props.focused} name='home' />
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          tabBarIcon: (props: { focused: boolean; color: string; size: number; }) => <TapBarIcon focused={props.focused} name='cart' />
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarIcon: (props: { focused: boolean; color: string; size: number; }) => <TapBarIcon focused={props.focused} name='account' />
        }}
      />
    </Tabs>
  );
}
