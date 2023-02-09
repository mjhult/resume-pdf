import React, { FC } from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { Experience } from './components/Experience';

import { Contact } from './components/Contact';
import { textFormat } from './helpers/helper';

// Data imports
import { data, colors } from './data/data';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: colors.backgroundColor,
  },

  header: {
    alignContent: 'center',
    alignSelf: 'center',
    padding: 10,
  },

  title: {
    fontSize: 24,
    marginBottom: 17,
    color: colors.primaryColor,
  },

  sections: {
    flexDirection: 'row',
    flexGrow: 2,
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Resume: FC = () => (
  <Document>
    <Page size='A4' wrap={false} style={styles.page}>
      {/* Header */}
      <View style={{ ...styles.header, alignItems: 'center' }}>
        <Text style={{ fontSize: 35, color: colors.textColor }}>
          {data.name}
        </Text>
        <Text style={{ fontSize: 20, color: colors.textColor }}>
          {data.position}
        </Text>
      </View>

      {/* Split view */}
      <View style={styles.sections}>
        {/* Projects, Experience */}
        <View style={styles.section}>
          {/* Project Experience */}
          <View style={styles.section}>
            <Text style={styles.title}>Projects</Text>
            {data.projects.map((e, i) => (
              <Experience
                key={i}
                title={e.title}
                subTitle={e.subTitle}
                duties={e.duties}
              />
            ))}
          </View>

          {/* Work Experience */}
          <View style={styles.section}>
            <Text style={styles.title}>Experience</Text>
            {data.workExperience.map((e, i) => (
              <Experience
                key={i}
                title={e.title}
                subTitle={e.subTitle}
                duties={e.duties}
                subTitleStyle={{ marginBottom: 5 }}
              />
            ))}
          </View>
        </View>

        {/* Professional Summary, Contact, Skills */}
        <View
          style={[
            styles.section,
            {
              borderLeft: 1,
              borderColor: colors.secondaryColor,
              marginRight: 1,
            },
          ]}>
          {/* Contact */}
          <View style={styles.section}>
            <Text style={styles.title}>Contact Me</Text>
            {data.contacts.map((contact, i) => (
              <Contact
                key={i}
                type={contact.type}
                icon={contact.icon}
                data={contact.data}
              />
            ))}
          </View>

          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.title}>Summary</Text>
            <Text
              style={{
                fontSize: 13,
                color: colors.textColor,
                textAlign: 'left',
                width: 230,
              }}>
              {data.professionalSummary ?? 'No summary.'}
            </Text>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.title}>Skills</Text>
            {data.skills.data.map((skill, i) => (
              <Text
                key={i}
                style={{
                  fontSize: 13,
                  color: colors.textColor,
                  marginBottom: 6,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.secondaryColor,
                    marginBottom: 6,
                  }}>
                  {data.skills.point ? `${data.skills.point} ` : null}
                </Text>
                {textFormat(skill)}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
