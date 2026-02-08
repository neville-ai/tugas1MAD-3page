import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScreenTransition from "../../components/ScreenTransition";

const index = () => {
  const [isIdOpen, setIsIdOpen] = useState(false);
  const slideY = useRef(new Animated.Value(-600)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const profileImage = require("../../assets/images/idcard/profile.jpg");
  const idCardImage = require("../../assets/images/idcard/profile.jpg");

  const openIdCard = () => {
    setIsIdOpen(true);
    Animated.parallel([
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 250,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(slideY, {
        toValue: 0,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeIdCard = () => {
    Animated.parallel([
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 220,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(slideY, {
        toValue: -600,
        duration: 280,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsIdOpen(false);
    });
  };

  return (
    <ScreenTransition style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.greeting}>Selamat Datang,</Text>
              <Text style={styles.name}>Awuy, Kharis Neville </Text>
            </View>
            <View style={styles.avatar}>
              <Image source={profileImage} style={styles.avatarImage} />
            </View>
          </View>

          <View style={styles.heroCard}>
            <View style={styles.statusPill}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Active Student</Text>
            </View>
            <Text style={styles.heroTitle}>Student Profile{"\n"}App</Text>
            <Text style={styles.heroText}>
              You guys can see little about my college information and my
              academic records, personal information, and student achievements
              so far.
            </Text>
            <Pressable onPress={openIdCard} style={styles.heroButton}>
              <Text style={styles.heroButtonText}>View ID Card</Text>
            </Pressable>
          </View>

          <Text style={styles.sectionTitle}>Menu Utama</Text>

          <View style={styles.menuCard}>
            <View style={styles.menuIconWrap}>
              <Ionicons name="person-outline" size={22} color="#5B5FEF" />
            </View>
            <View style={styles.menuTextWrap}>
              <Text style={styles.menuTitle}>Data Diri</Text>
              <Text style={styles.menuSubtitle}>
                Informasi pribadi & kontak
              </Text>
            </View>
          </View>

          <View style={styles.menuCard}>
            <View style={styles.menuIconWrap}>
              <Ionicons name="school-outline" size={22} color="#5B5FEF" />
            </View>
            <View style={styles.menuTextWrap}>
              <Text style={styles.menuTitle}>Pendidikan</Text>
              <Text style={styles.menuSubtitle}>Riwayat akademik & nilai</Text>
            </View>
          </View>

          <View style={styles.menuCard}>
            <View style={styles.menuIconWrap}>
              <Ionicons name="briefcase-outline" size={22} color="#5B5FEF" />
            </View>
            <View style={styles.menuTextWrap}>
              <Text style={styles.menuTitle}>Pengalaman</Text>
              <Text style={styles.menuSubtitle}>
                Pengalaman kerja & kepanitiaan organisasi
              </Text>
            </View>
          </View>
        </ScrollView>

        {isIdOpen && (
          <View style={styles.idOverlayWrap} pointerEvents="box-none">
            <Pressable style={styles.idOverlay} onPress={closeIdCard}>
              <Animated.View
                style={[styles.idOverlayDim, { opacity: overlayOpacity }]}
              />
            </Pressable>
            <Animated.View
              style={[
                styles.idCardSheet,
                { transform: [{ translateY: slideY }] },
              ]}
            >
              <View style={styles.idCardHeader}>
                <Text style={styles.idCardTitle}>ID Card Mahasiswa</Text>
                <Pressable onPress={closeIdCard} style={styles.idCloseBtn}>
                  <Ionicons name="close" size={18} color="#111827" />
                </Pressable>
              </View>
              <View style={styles.idCardImage}>
                <Image source={idCardImage} style={styles.idCardImageContent} />
              </View>
              <Text style={styles.idCardHint}>
                Ganti area ini dengan gambar ID card kamu.
              </Text>
            </Animated.View>
          </View>
        )}
      </SafeAreaView>
    </ScreenTransition>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2FF",
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 128,
    gap: 18,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greeting: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 4,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F2937",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroCard: {
    backgroundColor: "#5B5FEF",
    borderRadius: 28,
    padding: 22,
    shadowColor: "#1E1B4B",
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 8,
    width: "100%",
  },
  statusPill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(255,255,255,0.16)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 14,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#30D158",
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  heroText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
    lineHeight: 20,
    marginBottom: 18,
  },
  heroButton: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 18,
  },
  heroButtonText: {
    color: "#5B5FEF",
    fontWeight: "700",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginTop: 4,
  },
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    width: "100%",
  },
  menuIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  menuTextWrap: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: "#6B7280",
  },
  idOverlayWrap: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  idOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  idOverlayDim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  idCardSheet: {
    width: "86%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  idCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  idCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  idCloseBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  idCardImage: {
    height: 220,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  idCardImageContent: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  idCardPlaceholder: {
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  idCardHint: {
    marginTop: 10,
    fontSize: 12,
    color: "#6B7280",
  },
});
