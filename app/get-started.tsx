import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function GetStarted() {
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ translateY }],
          },
        ]}
      >
        <Text style={styles.title}>Welcome Guys👋</Text>
        <Text style={styles.subtitle}>
          This application showcases my profile, education, and experience as a
          student. Feel free to explore and learn more about me!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.replace({
              pathname: "/(tabs)",
            })
          }
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F5F3", // Canva cream
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#EADCF8", // Lavender pastel
    padding: 28,
    borderRadius: 24,
    width: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2E2A32",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#2E2A32",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
