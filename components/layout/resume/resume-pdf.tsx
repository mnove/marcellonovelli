/* eslint-disable jsx-a11y/alt-text */

"use client";

import {
  experiences,
  hero,
  projects,
  codingSkills,
  designProductSkills,
} from "@/data/experience";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
  Link,
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
    padding: 15,
    fontFamily: "Plus Jakarta Sans",
  },
  verticalSeparator: {
    width: "100%",
    height: 1,
    backgroundColor: "#757575",
    margin: 5,
  },
  section: {
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 0,
    marginBottom: 0,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 3,
    fontFamily: "Plus Jakarta Sans",
  },

  projectTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 1,
    fontFamily: "Plus Jakarta Sans",
  },
  company: {
    fontSize: 10,
    fontWeight: "medium",
    fontFamily: "Plus Jakarta Sans",
  },
  period: {
    fontSize: 9,
    color: "#666",
    fontFamily: "Plus Jakarta Sans",
  },
  description: {
    fontSize: 10,
    marginTop: 5,
    marginBottom: 3,
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
    marginBottom: 3,
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },

  badge: {
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    padding: 2,
    marginRight: 5,
    fontSize: 8,
    color: "#333",
    fontFamily: "Plus Jakarta Sans",
  },
  avatar: {
    width: 64,
    height: 64,
    marginRight: 8,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  experienceContent: {
    flex: 1,
  },
  projectContent: {
    flex: 1,
  },

  link: {
    color: "#012852",
    textDecoration: "none",
    fontSize: 10,
  },

  linksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    gap: 5,
  },
});

export const PDFResume = () => (
  <Document title="Marcello Novelli - Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.experienceHeader}>
          <Image
            style={styles.avatar}
            src="https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/marcello-rounded.png"
          />
          <View style={styles.experienceContent}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Text style={styles.title}>{hero.title}</Text>
              <Text style={styles.link}>marcello.nov21@gmail.com</Text>
            </View>

            <View style={styles.detailsContainer}>
              <View>
                <Text style={styles.company}>{hero.subtitle}</Text>
                <Text style={styles.period}>{hero.description}</Text>
              </View>
            </View>

            <View>
              <View style={styles.linksContainer}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 0,
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Text style={styles.period}>Website: </Text>
                  <Link src="https://github.com/mnove" style={styles.link}>
                    marcellonovelli.com
                  </Link>
                </View>
                <View
                  style={{
                    color: "#012852",
                  }}
                >
                  |
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 0,
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Text style={styles.period}>Github: </Text>
                  <Link src="https://github.com/mnove" style={styles.link}>
                    github.com/mnove
                  </Link>
                </View>
                <View
                  style={{
                    color: "#012852",
                  }}
                >
                  |
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 0,
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Text style={styles.period}>Linkedin: </Text>
                  <Link
                    src="https://www.linkedin.com/in/marcello-novelli21/"
                    style={styles.link}
                  >
                    marcello.nov21
                  </Link>
                </View>
              </View>
            </View>

            {/* <View style={styles.badgeContainer}>
                      {experience.badges?.map((badge, index) => (
                        <Text key={index} style={styles.badge}>
                          {badge.label}
                        </Text>
                      ))}
                    </View> */}
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text
          style={{
            fontSize: 12,
            textAlign: "left",
            marginTop: 10,
            marginBottom: 10,
            fontWeight: "bold",
            letterSpacing: 1.2,
          }}
        >
          EXPERIENCE
        </Text>

        {experiences
          .filter((exp) => exp.type === "work")
          .map((experience) => (
            <View key={experience.id} style={{ marginBottom: 5 }} wrap={false}>
              <View style={styles.experienceHeader}>
                <Image style={styles.logo} src={experience.logoUrl} />
                <View style={styles.experienceContent}>
                  <Text style={styles.title}>{experience.title}</Text>

                  <View style={styles.detailsContainer}>
                    <View>
                      <Text style={styles.company}>{experience.company}</Text>
                      <Text style={styles.period}>{experience.period}</Text>
                      <Text style={styles.period}>{experience.location}</Text>
                    </View>
                    <View style={styles.badgeContainer}>
                      {experience.badges?.map((badge, index) => (
                        <Text key={index} style={styles.badge}>
                          {badge.label}
                        </Text>
                      ))}
                    </View>
                  </View>
                  <Text style={styles.description}>
                    {experience.shortDescription}
                  </Text>

                  {/* {experience.responsibilities.map((responsibility, index) => (
                    <Text key={index} style={styles.responsibility}>
                      • {responsibility}
                    </Text>
                  ))} */}
                </View>
              </View>
            </View>
          ))}
      </View>

      <View style={styles.section}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              textAlign: "left",
              marginTop: 10,
              marginBottom: 5,
              fontWeight: "bold",
              letterSpacing: 1.2,
            }}
          >
            LATEST PROJECTS
          </Text>
          <Text
            style={{
              fontSize: 9,
              textAlign: "left",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            See{" "}
            <Link
              src="https://www.marcellonovelli.com/docs"
              style={styles.link}
            >
              marcellonovelli.com/docs
            </Link>{" "}
            for complete lists
          </Text>
        </View>

        {/* Split projects into two columns */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
          }}
        >
          {/* Left column */}
          <View style={{ flex: 1 }}>
            {projects
              .filter((_, idx) => idx % 2 === 0)
              .map((project) => (
                <View key={project.id} style={{ marginBottom: 5 }} wrap={true}>
                  <View style={styles.experienceHeader}>
                    <Image style={styles.logo} src={project.logoUrl} />
                    <View style={styles.projectContent}>
                      <View
                        style={{
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.projectTitle}>{project.title}</Text>
                        <Text style={styles.link}>{project.url}</Text>
                      </View>

                      <View style={styles.detailsContainer}>
                        <View>
                          <Text style={styles.period}>
                            {project.description}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.badgeContainer}>
                        {project.technologies?.map((tech, index) => (
                          <Text key={index} style={styles.badge}>
                            {tech}
                          </Text>
                        ))}
                      </View>

                      {/* {experience.responsibilities.map((responsibility, index) => (
                    <Text key={index} style={styles.responsibility}>
                      • {responsibility}
                    </Text>
                  ))} */}
                    </View>
                  </View>
                </View>
              ))}
          </View>
          {/* Right column */}
          <View style={{ flex: 1 }}>
            {projects
              .filter((_, idx) => idx % 2 === 1)
              .map((project) => (
                <View key={project.id} style={{ marginBottom: 5 }} wrap={true}>
                  <View style={styles.experienceHeader}>
                    <Image style={styles.logo} src={project.logoUrl} />
                    <View style={styles.projectContent}>
                      <View
                        style={{
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.projectTitle}>{project.title}</Text>
                        <Text style={styles.link}>{project.url}</Text>
                      </View>

                      <View style={styles.detailsContainer}>
                        <View>
                          <Text style={styles.period}>
                            {project.description}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.badgeContainer}>
                        {project.technologies?.map((tech, index) => (
                          <Text key={index} style={styles.badge}>
                            {tech}
                          </Text>
                        ))}
                      </View>

                      {/* {experience.responsibilities.map((responsibility, index) => (
                    <Text key={index} style={styles.responsibility}>
                      • {responsibility}
                    </Text>
                  ))} */}
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </View>
      </View>

      {/* Skills and Education side by side */}
      <View style={styles.section}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 24,
            alignItems: "flex-start",
          }}
        >
          {/* Skills Section */}
          <View style={{ flex: 2 }}>
            <Text
              style={{
                fontSize: 12,
                textAlign: "left",
                marginTop: 10,
                marginBottom: 6,
                fontWeight: "bold",
                letterSpacing: 1.2,
              }}
            >
              SKILLS
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
              }}
            >
              {/* Coding Skills */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontSize: 10, fontWeight: "bold", marginBottom: 2 }}
                >
                  Coding
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    {codingSkills
                      .filter((_, idx) => idx % 2 === 0)
                      .map((skill) => (
                        <Text
                          key={skill}
                          style={{ fontSize: 8, marginBottom: 1 }}
                        >
                          • {skill}
                        </Text>
                      ))}
                  </View>
                  <View style={{ flex: 1 }}>
                    {codingSkills
                      .filter((_, idx) => idx % 2 === 1)
                      .map((skill) => (
                        <Text
                          key={skill}
                          style={{ fontSize: 8, marginBottom: 1 }}
                        >
                          • {skill}
                        </Text>
                      ))}
                  </View>
                </View>
              </View>
              {/* Design & Product Skills */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontSize: 10, fontWeight: "bold", marginBottom: 2 }}
                >
                  Design & Product
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    {designProductSkills
                      .filter((_, idx) => idx % 2 === 0)
                      .map((skill) => (
                        <Text
                          key={skill}
                          style={{ fontSize: 8, marginBottom: 1 }}
                        >
                          • {skill}
                        </Text>
                      ))}
                  </View>
                  <View style={{ flex: 1 }}>
                    {designProductSkills
                      .filter((_, idx) => idx % 2 === 1)
                      .map((skill) => (
                        <Text
                          key={skill}
                          style={{ fontSize: 8, marginBottom: 1 }}
                        >
                          • {skill}
                        </Text>
                      ))}
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Education Section */}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 12,
                textAlign: "left",
                marginTop: 10,
                marginBottom: 6,
                fontWeight: "bold",
                letterSpacing: 1.2,
              }}
            >
              EDUCATION
            </Text>
            <View>
              <Text style={styles.title}>Bachelor of Management</Text>
              <Text style={styles.period}>University of British Columbia</Text>
              <Text style={styles.period}>Vancouver, Canada</Text>
            </View>
            <View style={{ marginTop: 6 }}>
              <Text style={styles.title}>MSc Technology</Text>
              <Text style={styles.period}>Faculty of Engineering - UCL </Text>
              <Text style={styles.period}>London, UK</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
