import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScreenTransition from "../../components/ScreenTransition";

export default function Profile() {
  return (
    <ScreenTransition style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topBar}>
            <Pressable style={styles.topBarAction}>
              <Ionicons name="arrow-back" size={22} color="#111827" />
            </Pressable>
            <Text style={styles.topBarTitle}>STUDENT PROFILE</Text>
            <Pressable style={styles.topBarAction}>
              <Text style={styles.topBarEdit}>Edit</Text>
            </Pressable>
          </View>

          <View style={styles.profileHeader}>
            <View style={styles.avatarWrap}>
              <View style={styles.avatarCircle}>
                <Ionicons name="person" size={36} color="#8A8F9C" />
              </View>
              <View style={styles.avatarEdit}>
                <Ionicons name="pencil" size={12} color="#FFFFFF" />
              </View>
            </View>
            <Text style={styles.profileName}>Nama Mahasiswa</Text>
            <Text style={styles.profileMeta}>Program Studi • ID: 2024XXXX</Text>
            <View style={styles.badgeRow}>
              <View style={styles.badgePrimary}>
                <Text style={styles.badgePrimaryText}>ACTIVE</Text>
              </View>
              <View style={styles.badgeSecondary}>
                <Text style={styles.badgeSecondaryText}>SEM 5</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionLabel}>BIODATA</Text>
          <View style={styles.card}>
            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, styles.infoIconBlue]}>
                <Ionicons name="id-card" size={18} color="#2F5EFF" />
              </View>
              <View>
                <Text style={styles.infoTitle}>FULL NAME</Text>
                <Text style={styles.infoValue}>Nama Lengkap</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, styles.infoIconPurple]}>
                <Ionicons name="calendar" size={18} color="#6D5BFF" />
              </View>
              <View>
                <Text style={styles.infoTitle}>POB / DOB</Text>
                <Text style={styles.infoValue}>Kota, Tanggal Lahir</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, styles.infoIconViolet]}>
                <Ionicons name="heart" size={18} color="#9B5CFF" />
              </View>
              <View>
                <Text style={styles.infoTitle}>RELIGION</Text>
                <Text style={styles.infoValue}>Agama</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, styles.infoIconPink]}>
                <Ionicons name="male-female" size={18} color="#F1498E" />
              </View>
              <View>
                <Text style={styles.infoTitle}>GENDER</Text>
                <Text style={styles.infoValue}>Gender</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionLabel}>ABOUT STUDENT</Text>
          <View style={styles.card}>
            <Text style={styles.aboutText}>
              Deskripsi singkat tentang mahasiswa. Tulis minat, aktivitas, dan
              informasi penting lainnya di sini.
            </Text>
          </View>

          <Text style={styles.sectionLabel}>ACADEMIC INFO</Text>
          <View style={styles.card}>
            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, styles.infoIconMint]}>
                <Ionicons name="school" size={18} color="#10B981" />
              </View>
              <View>
                <Text style={styles.infoValueStrong}>Faculty / Program</Text>
                <Text style={styles.infoValue}>Informatics Engineering</Text>
                <Text style={styles.infoSubtle}>Class of 20XX</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <View style={[styles.infoIcon, styles.infoIconOrange]}>
                <Ionicons name="star" size={18} color="#F97316" />
              </View>
              <View>
                <Text style={styles.infoValueStrong}>Current GPA</Text>
                <Text style={styles.infoValue}>0.00 / 4.00</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenTransition>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2FF",
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 30,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    marginBottom: 6,
  },
  topBarAction: {
    width: 48,
    alignItems: "center",
  },
  topBarTitle: {
    fontSize: 14,
    letterSpacing: 1.2,
    fontWeight: "700",
    color: "#111827",
  },
  topBarEdit: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 12,
    gap: 8,
  },
  avatarWrap: {
    width: 88,
    height: 88,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarEdit: {
    position: "absolute",
    right: 6,
    bottom: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#EEF2FF",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  profileMeta: {
    fontSize: 13,
    color: "#6B7280",
  },
  badgeRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  badgePrimary: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgePrimaryText: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 12,
  },
  badgeSecondary: {
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeSecondaryText: {
    color: "#374151",
    fontWeight: "700",
    fontSize: 12,
  },
  sectionLabel: {
    marginTop: 16,
    marginBottom: 8,
    color: "#9CA3AF",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    width: "100%",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  infoIconBlue: {
    backgroundColor: "#E9F0FF",
  },
  infoIconPurple: {
    backgroundColor: "#EFE9FF",
  },
  infoIconViolet: {
    backgroundColor: "#F2E9FF",
  },
  infoIconPink: {
    backgroundColor: "#FFE9F3",
  },
  infoIconMint: {
    backgroundColor: "#E8FFF5",
  },
  infoIconOrange: {
    backgroundColor: "#FFF1E6",
  },
  infoTitle: {
    fontSize: 11,
    color: "#9CA3AF",
    fontWeight: "700",
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: "#111827",
    fontWeight: "600",
  },
  infoValueStrong: {
    fontSize: 14,
    color: "#111827",
    fontWeight: "700",
    marginBottom: 2,
  },
  infoSubtle: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
  },
  aboutText: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
});
