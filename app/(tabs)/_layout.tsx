import { Ionicons } from "@expo/vector-icons";
import { BottomTabBar, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React, { useEffect, useMemo, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const TAB_ICON_SIZE = 22;
const TAB_BAR_MARGIN = 16;
const TAB_BAR_PADDING_X = 12;
const NOTCH_WIDTH = 74;
const NOTCH_HEIGHT = 34;
const APP_BG = "transparent";

const createTabOptions = (title: string, iconName: keyof typeof Ionicons.glyphMap) => ({
  title,
  tabBarIcon: ({
    color,
    focused,
  }: {
    color: string;
    focused: boolean;
  }) => (
    <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
      <Ionicons
        name={focused ? (iconName.replace("-outline", "") as keyof typeof Ionicons.glyphMap) : iconName}
        size={TAB_ICON_SIZE}
        color={focused ? "#ffffff" : color}
      />
    </View>
  ),
  tabBarLabel: ({ focused, color }: { focused: boolean; color: string }) =>
    focused ? <Text style={[styles.label, { color }]}>{title}</Text> : null,
});

const CustomTabBar = (props: BottomTabBarProps) => {
  const { routes, index } = props.state;
  const tabBarWidth = useMemo(() => Dimensions.get("window").width - TAB_BAR_MARGIN * 2, []);
  const tabWidth = (tabBarWidth - TAB_BAR_PADDING_X * 2) / routes.length;
  const notchX = TAB_BAR_MARGIN + TAB_BAR_PADDING_X + tabWidth * index + tabWidth / 2 - NOTCH_WIDTH / 2;
  const notchTranslate = useRef(new Animated.Value(notchX)).current;

  useEffect(() => {
    Animated.spring(notchTranslate, {
      toValue: notchX,
      useNativeDriver: false,
      stiffness: 220,
      damping: 22,
      mass: 0.7,
    }).start();
  }, [notchX, notchTranslate]);

  return (
    <View pointerEvents="box-none" style={styles.tabBarWrapper}>
      <Animated.View
        pointerEvents="none"
        style={[
          styles.notch,
          {
            transform: [{ translateX: notchTranslate }],
          },
        ]}
      />
      <BottomTabBar {...props} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#e5e7eb",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={createTabOptions("Home", "home-outline")}
      />

      <Tabs.Screen
        name="profile"
        options={createTabOptions("Profile", "person-outline")}
      />

      <Tabs.Screen
        name="education"
        options={createTabOptions("Education", "school-outline")}
      />

      <Tabs.Screen
        name="experience"
        options={createTabOptions("Experience", "briefcase-outline")}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  tabBarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabBar: {
    position: "absolute",
    left: TAB_BAR_MARGIN,
    right: TAB_BAR_MARGIN,
    bottom: 16,
    height: 72,
    backgroundColor: "#2b2b2b",
    borderTopWidth: 0,
    borderRadius: 36,
    paddingHorizontal: TAB_BAR_PADDING_X,
    paddingTop: 8,
    paddingBottom: 12,
    shadowColor: "#000000",
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  tabBarItem: {
    borderRadius: 24,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainerActive: {
    backgroundColor: "#7c3aed",
    transform: [{ translateY: -18 }],
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
  notch: {
    position: "absolute",
    left: TAB_BAR_MARGIN,
    bottom: 64,
    width: NOTCH_WIDTH,
    height: NOTCH_HEIGHT,
    backgroundColor: APP_BG,
    borderBottomLeftRadius: NOTCH_WIDTH / 2,
    borderBottomRightRadius: NOTCH_WIDTH / 2,
  },
});
