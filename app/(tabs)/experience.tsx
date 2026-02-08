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

const experience = () => {
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
            <Text style={styles.topBarTitle}>
              Pengalaman Kerja dan Kepanitiaan
            </Text>
            <View style={styles.topBarAction} />
          </View>

          <Text style={styles.sectionTitle}>Pengalaman Kerja</Text>
          <View style={styles.timelineWrap}>
            <View style={styles.timelineLine} />
            <View style={styles.timelineItem}>
              <View style={[styles.timelineIcon, styles.timelineIconSolid]}>
                <Ionicons name="briefcase" size={16} color="#FFFFFF" />
              </View>
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>Palin Enak</Text>
                  <View style={styles.badgeBlue}>
                    <Text style={styles.badgeBlueText}>2023-2024</Text>
                  </View>
                </View>
                <View style={styles.divider} />
                <Text style={styles.cardDesc}>
                  Usaha makanan ringan berupa mochi yang saya buat dengan teman
                  saya. Dimana saya membantu teman saya menjalankan usaha ini di
                  bagian penyediaan bahan, produksi, hingga pemasaran produk ke
                  konsumen.
                </Text>
                <View style={styles.tagRow}>
                  <View style={styles.tagPill}>
                    <Text style={styles.tagText}>FnB</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Organisasi Sekolah</Text>
          <View style={styles.timelineWrap}>
            <View style={styles.timelineLine} />
            <View style={styles.timelineItem}>
              <View style={[styles.timelineIcon, styles.timelineIconSolid]}>
                <Ionicons name="people" size={16} color="#FFFFFF" />
              </View>
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>
                    Panitia Utama Penamatan SMA Angkatan
                  </Text>
                  <View style={styles.badgeGreen}>
                    <Text style={styles.badgeGreenText}>PERIODE 2022</Text>
                  </View>
                </View>
                <View style={styles.metaRow}>
                  <Ionicons name="people" size={14} color="#94A3B8" />
                  <Text style={styles.metaText}>Panitia Penamatan</Text>
                </View>
                <View style={styles.divider} />
                <Text style={styles.cardDesc}>
                  Salah satu pelopor agar penamatan terlaksana dan mengkoordinir
                  tim untuk mengadakan acara penamatan pertama setelah beberapa
                  tahun tidak diadakan karena adanya pandemi covid-19.
                </Text>
              </View>
            </View>
          </View>

          <Pressable style={styles.addBtn}>
            <Ionicons name="add" size={18} color="#4F46E5" />
            <Text style={styles.addBtnText}>Tambah Pengalaman Baru</Text>
          </Pressable>

          <Text style={styles.quoteText}>
            "Pelajaran yang terbaik adalah pengalaman."
          </Text>
        </ScrollView>
      </SafeAreaView>
    </ScreenTransition>
  );
};

export default experience;

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
    paddingBottom: 128,
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
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginTop: 14,
    marginBottom: 10,
  },
  quoteText: {
    textAlign: "center",
    color: "#A5B4FC",
    fontStyle: "italic",
    marginTop: 20,
  },
  timelineWrap: {
    position: "relative",
    gap: 16,
    marginBottom: 6,
    width: "100%",
  },
  timelineLine: {
    position: "absolute",
    left: 19,
    top: 10,
    bottom: 10,
    width: 2,
    backgroundColor: "#C7D2FE",
    borderRadius: 1,
  },
  timelineItem: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
    width: "100%",
  },
  timelineIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEF2FF",
    borderWidth: 2,
    borderColor: "#C7D2FE",
    alignItems: "center",
    justifyContent: "center",
  },
  timelineIconSolid: {
    backgroundColor: "#5B5FEF",
    borderColor: "#5B5FEF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 14,
    flex: 1,
    minWidth: 0,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    flex: 1,
  },
  badgeBlue: {
    backgroundColor: "#E0E7FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeBlueText: {
    color: "#4F46E5",
    fontSize: 11,
    fontWeight: "700",
  },
  badgeGreen: {
    backgroundColor: "#E8F9EE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeGreenText: {
    color: "#16A34A",
    fontSize: 11,
    fontWeight: "700",
  },
  yearText: {
    fontSize: 12,
    color: "#94A3B8",
    fontWeight: "600",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },
  metaText: {
    fontSize: 13,
    color: "#64748B",
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 12,
  },
  cardDesc: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },
  tagRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
  },
  tagPill: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600",
  },
  addBtn: {
    marginTop: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  addBtnText: {
    color: "#4F46E5",
    fontWeight: "700",
  },
});
