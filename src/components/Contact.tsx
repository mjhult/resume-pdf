import ReactPDF, { View, Text, StyleSheet } from '@react-pdf/renderer';
import React, { FC } from 'react';
import { colors } from '../data/data';
import { textFormat } from '../helpers/helper';
import { ContactInfo } from '../types/data';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  text: {
    marginLeft: 4,
    fontSize: 13,
    width: 230,
  },
});

export const Contact: FC<
  ContactInfo & {
    textStyle?: ReactPDF.Styles;
    containerStyle?: ReactPDF.Styles;
  }
> = ({ type, data, icon, textStyle, containerStyle }) => (
  <View style={[styles.container, containerStyle]}>
    {icon ?? (
      <Text style={{ color: colors.textColor }}>{textFormat(type)}:</Text>
    )}
    <Text style={[{ color: colors.textColor }, styles.text, textStyle]}>
      {data}
    </Text>
  </View>
);
