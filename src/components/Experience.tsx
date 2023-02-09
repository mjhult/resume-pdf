import React, { FC } from "react";
import { Text, View } from "@react-pdf/renderer";

export type Duty = {
  title: string;
  point?: string;
  pointColor?: string;
  textColor?: string;
};

export type ExperienceProps = {
  title: string;
  titleTextColor?: string;
  subTitle: string;
  subTitleTextColor?: string;
  duties?: Duty[];
};

const Experience: FC<ExperienceProps> = ({
  title,
  subTitle,
  duties,
  subTitleTextColor,
  titleTextColor,
}) => null;
