import ReactPDF from '@react-pdf/renderer';
import { ReactNode } from 'react';
import { Style } from '@react-pdf/types';

export type Duty = {
  title: string | ReactNode;
  point?: string | ReactNode;
  pointColor?: string;
  textColor?: string;
};

export type WorkExperience = {
  title: string;
  titleTextColor?: string;
  subTitle?: string | ReactNode;
  subTitleStyle?: Style;
  duties?: Duty[];
};

export type ContactInfo = {
  type: string;
  data: string;
  icon?: ReactNode;
};

export type SkillData = {
  data: string[];
  point: string;
};

export type Data = {
  name: string;
  position: string;
  professionalSummary: string;
  contacts: ContactInfo[];
  skills: SkillData;
  projects: WorkExperience[];
  workExperience: WorkExperience[];
};
