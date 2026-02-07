import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScreenTransition from "../../components/ScreenTransition";

const education = () => {
  return (
    <ScreenTransition style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Riwayat Pendidikan</Text>
          <View style={styles.headerIcon}>
            <Ionicons name="school" size={18} color="#5B5FEF" />
          </View>
        </View>

        <View style={styles.timelineWrap}>
          <View style={styles.timelineLine} />

          <View style={styles.timelineItem}>
            <View style={[styles.timelineIcon, styles.timelineIconSolid]}>
              <Ionicons name="school" size={16} color="#FFFFFF" />
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.tagPrimary}>
                  <Text style={styles.tagPrimaryText}>PERGURUAN TINGGI</Text>
                </View>
                <Text style={styles.yearText}>2019 - 2023</Text>
              </View>
              <Text style={styles.cardTitle}>
                Universitas Teknologi Nasional
              </Text>
              <Text style={styles.cardSubtitle}>
                Sarjana Teknik Informatika
              </Text>
              <Text style={styles.cardDesc}>
                Lulus dengan predikat Cum Laude. Fokus skripsi pada pengembangan
                aplikasi mobile edukatif berbasis gamifikasi.
              </Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineIcon}>
              <Ionicons name="book" size={16} color="#5B5FEF" />
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.tagNeutral}>
                  <Text style={styles.tagNeutralText}>SMA</Text>
                </View>
                <Text style={styles.yearText}>2016 - 2019</Text>
              </View>
              <Text style={styles.cardTitle}>SMA Negeri 1 Jakarta</Text>
              <Text style={styles.cardSubtitle}>Jurusan IPA (Sains)</Text>
              <Text style={styles.cardDesc}>
                Aktif dalam ekstrakurikuler Robotika dan OSIS. Menjuarai
                Olimpiade Matematika tingkat kota.
              </Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineIcon}>
              <Ionicons name="create" size={16} color="#5B5FEF" />
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.tagNeutral}>
                  <Text style={styles.tagNeutralText}>SMP</Text>
                </View>
                <Text style={styles.yearText}>2013 - 2016</Text>
              </View>
              <Text style={styles.cardTitle}>SMP Negeri 45</Text>
              <Text style={styles.cardDesc}>
                Pengembangan minat awal dalam teknologi komputer dan desain
                grafis. Anggota klub Pramuka.
              </Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineIcon}>
              <Ionicons name="clipboard" size={16} color="#5B5FEF" />
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.tagNeutral}>
                  <Text style={styles.tagNeutralText}>SD</Text>
                </View>
                <Text style={styles.yearText}>2007 - 2013</Text>
              </View>
              <Text style={styles.cardTitle}>SD Negeri 02 Pagi</Text>
              <Text style={styles.cardDesc}>
                Pendidikan dasar. Berpartisipasi aktif dalam kegiatan olahraga
                sekolah dan seni lukis.
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.quoteText}>
          "Pendidikan adalah tiket ke masa depan."
        </Text>
      </ScrollView>

      <View style={styles.fab}>
        <Ionicons name="school" size={20} color="#FFFFFF" />
      </View>
      </SafeAreaView>
    </ScreenTransition>
  );
};

export default education;

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
    paddingTop: 16,
    paddingBottom: 90,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  headerIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E9EEFF",
    alignItems: "center",
    justifyContent: "center",
  },
  timelineWrap: {
    position: "relative",
    gap: 16,
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
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    width: "100%",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  tagPrimary: {
    backgroundColor: "#E7ECFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagPrimaryText: {
    color: "#5B5FEF",
    fontWeight: "700",
    fontSize: 11,
    letterSpacing: 0.6,
  },
  tagNeutral: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagNeutralText: {
    color: "#374151",
    fontWeight: "700",
    fontSize: 11,
    letterSpacing: 0.6,
  },
  yearText: {
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "600",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#4F46E5",
    fontWeight: "600",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },
  quoteText: {
    textAlign: "center",
    color: "#A5B4FC",
    fontStyle: "italic",
    marginTop: 20,
  },
  fab: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#5B5FEF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
  },
});
