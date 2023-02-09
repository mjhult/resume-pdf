import React, { FC } from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { Experience } from './components/Experience';

// Data imports
import { data } from './data/data';
import { Contact } from './components/Contact';
import { textFormat } from './helpers/helper';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FEFFF8',
  },

  header: {
    alignContent: 'center',
    alignSelf: 'center',
    padding: 10,
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
    <Page size='A4' style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text>{data.name}</Text>
        <Text>{data.position}</Text>
      </View>

      {/* Split view */}
      <View style={styles.sections}>
        <View style={styles.section}>
          {/* Project Experience */}
          <View style={styles.section}>
            <Text>Projects</Text>
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
            <Text>Experience</Text>
            {data.workExperience.map((e, i) => (
              <Experience
                key={i}
                title={e.title}
                subTitle={e.subTitle}
                duties={e.duties}
              />
            ))}
          </View>
        </View>

        {/* Professional Summary, Contact, Skills */}
        <View style={styles.section}>
          {/* Contact */}
          <View style={styles.section}>
            <Text>Contact Me</Text>
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
            <Text>Summary</Text>
            <Text style={{ fontSize: 13 }}>
              {data.professionalSummary ?? 'No summary.'}
            </Text>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text>Skills</Text>
            {data.skills.map((skill, i) => (
              <Text key={i} style={{ fontSize: 13 }}>
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
