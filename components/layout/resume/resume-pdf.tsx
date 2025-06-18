/* eslint-disable jsx-a11y/alt-text */

"use client";

import { experiences } from "@/data/experience";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// Font.register({
//   family: "Inter",
//   fonts: [
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf",
//       fontWeight: 100,
//     },
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf",
//       fontWeight: 200,
//     },
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf",
//       fontWeight: 300,
//     },
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
//       fontWeight: 400,
//     },
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
//       fontWeight: 500,
//     },
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
//       fontWeight: 600,
//     },
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
//       fontWeight: 700,
//     },
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf",
//       fontWeight: 800,
//     },
//     {
//       src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf",
//       fontWeight: 900,
//     },
//   ],
// });

Font.register({
  family: "Plus Jakarta Sans",
  src: "/fonts/PlusJakartaSans-Regular.ttf",
});

Font.register({
  family: "Plus Jakarta Sans",
  src: "/fonts/PlusJakartaSans-Medium.ttf",
});

Font.register({
  family: "Plus Jakarta Sans",
  src: "/fonts/PlusJakartaSans-Bold.ttf",
});

Font.registerHyphenationCallback((word) => [word]);
// Font.register({
//   family: "Plus Jakarta Sans",
//   src: "/fonts/PlusJakartaSans-Light.ttf",
// });

Font.register({
  family: "Plus Jakarta Sans",
  fonts: [
    { src: "/fonts/PlusJakartaSans-Regular.ttf" }, // font-style: normal, font-weight: normal
    {
      src: "/fonts/PlusJakartaSans-Medium.ttf",
      fontStyle: "normal",
      fontWeight: 500,
    },
    {
      src: "/fonts/PlusJakartaSans-Bold.ttf",
      fontStyle: "normal",
      fontWeight: 700,
    },
    {
      src: "/fonts/PlusJakartaSans-Light.ttf",
      fontStyle: "normal",
      fontWeight: 300,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
    fontFamily: "Plus Jakarta Sans",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Plus Jakarta Sans",
  },
  company: {
    fontSize: 14,
    fontWeight: "medium",
    fontFamily: "Plus Jakarta Sans",
  },
  period: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Plus Jakarta Sans",
  },
  description: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Plus Jakarta Sans",
    textAlign: "justify",
  },
  responsibility: {
    fontSize: 11,
    marginLeft: 0,
    marginBottom: 3,
    fontFamily: "Plus Jakarta Sans",
  },
  experienceHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  experienceContent: {
    flex: 1,
  },
});

export const PDFResume = () => (
  <Document title="Marcello Novelli - Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 30 }}>
          Experience
        </Text>

        {experiences
          .filter((exp) => exp.type === "work")
          .map((experience) => (
            <View key={experience.id} style={{ marginBottom: 20 }} wrap={false}>
              <View style={styles.experienceHeader}>
                <Image
                  style={styles.logo}
                  src="https://avatar.iran.liara.run/public"
                />
                <View style={styles.experienceContent}>
                  <Text style={styles.title}>{experience.title}</Text>
                  <Text style={styles.company}>{experience.company}</Text>
                  <Text style={styles.period}>{experience.period}</Text>
                  <Text style={styles.period}>{experience.location}</Text>
                  <Text style={styles.description}>
                    {experience.description}
                  </Text>

                  {experience.responsibilities.map((responsibility, index) => (
                    <Text key={index} style={styles.responsibility}>
                      • {responsibility}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
      </View>
    </Page>
  </Document>
);
