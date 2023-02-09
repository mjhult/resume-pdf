import { ReactNode } from 'react';

export type Duty = {
  title: string;
  point?: string;
  pointColor?: string;
  textColor?: string;
};

export type WorkExperience = {
  title: string;
  titleTextColor?: string;
  subTitle?: string;
  subTitleTextColor?: string;
  duties?: Duty[];
};

export type ContactInfo = {
  type: string;
  data: string;
  icon?: ReactNode;
};

export type Data = {
  name: string;
  position: string;
  professionalSummary: string;
  contacts: ContactInfo[];
  skills: string[];
  projects: WorkExperience[];
  workExperience: WorkExperience[];
};
