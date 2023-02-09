import ReactPDF, { View, Text, StyleSheet } from '@react-pdf/renderer';
import React, { FC } from 'react';
import { textFormat } from '../helpers/helper';
import { ContactInfo } from '../types/data';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  text: {
    marginLeft: 4,
    fontSize: 13,
    // backgroundColor: 'red',
    width: 230,
  },
});

export const Contact: FC<
  ContactInfo & {
    textStyle?: ReactPDF.Styles;
    containerStyle?: ReactPDF.Styles;
  }
> = ({ type, data, icon, textStyle, containerStyle }) => (
  <View style={{ ...styles.container, ...containerStyle }}>
    {icon ?? <Text>{textFormat(type)}:</Text>}
    <Text style={{ ...styles.text, ...textStyle }}>{data}</Text>
  </View>
);
