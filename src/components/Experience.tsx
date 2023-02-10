import React, { FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { WorkExperience } from '../types/data';
import { colors } from '../data/data';

const styles = StyleSheet.create({
  experienceContainer: {
    marginBottom: 12,
    width: 230,
  },

  experienceTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
  },

  experienceSubTitle: {
    fontSize: 10,
    fontWeight: 'normal',
    width: '100%',
  },

  dutyTitle: {
    fontSize: 9,
    width: '100%',
    marginTop: 3,
  },
});

export const Experience: FC<WorkExperience> = ({
  title,
  subTitle,
  duties,
  subTitleStyle,
}) => {
  return (
    <View style={styles.experienceContainer}>
      <Text style={[styles.experienceTitle, { color: colors.textColor }]}>
        {title}
      </Text>
      <Text style={[styles.experienceSubTitle, subTitleStyle]}>
        {subTitle ?? null}
      </Text>
      {duties?.map((duty, i) => (
        <Text
          key={i}
          style={[
            { color: duty.textColor ?? colors.textColor },
            styles.dutyTitle,
          ]}>
          <Text
            style={{
              color: duty.pointColor ?? colors.primaryColor,
              display: duty.point ? 'flex' : 'none',
            }}>
            {duty.point}
            {duty.point ? ' ' : ''}
          </Text>
          {duty.title}
        </Text>
      ))}
    </View>
  );
};
