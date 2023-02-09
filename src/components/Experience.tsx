import React, { FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { WorkExperience } from '../types/data';

const styles = StyleSheet.create({
  experienceContainer: {
    // backgroundColor: 'red',
    // width: 250,
    // height: 150,
    marginTop: 8,
    // marginBottom: 8,
  },

  experienceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  experienceSubTitle: {
    fontSize: 13,
    fontWeight: 'normal',
  },

  dutyTitle: {
    fontSize: 9,
  },

  dutySubtitle: {
    fontSize: 8,
  },
});

export const Experience: FC<WorkExperience> = ({
  title,
  subTitle,
  duties,
  subTitleTextColor,
  titleTextColor,
}) => {
  return (
    <View style={styles.experienceContainer}>
      <Text style={styles.experienceTitle}>{title}</Text>
      <Text style={styles.experienceSubTitle}>{subTitle ?? null}</Text>
      {duties?.map((duty, i) => (
        <Text
          key={i}
          style={{ color: duty.textColor ?? '', ...styles.dutyTitle }}>
          <Text style={{ color: duty.pointColor ?? '' }}>{duty.point}</Text>{' '}
          {duty.title}
        </Text>
      ))}
    </View>
  );
};
