import React from 'react';
import { Data } from '../types/data';
import { GitHub, LinkedIn, Mail, Phone } from '../assets/icons';

export const data: Data = {
  name: 'Mathew Hultquist',
  position: 'Software Engineer',
  professionalSummary: 'Idk I really like writing code. teehee',
  contacts: [
    {
      type: 'phone',
      data: '+1 (999) 999-9999',
      icon: <Phone />,
    },
    {
      type: 'email',
      data: 'mathew@gates.services',
      icon: <Mail />,
    },
    {
      type: 'github',
      data: 'mjhult',
      icon: <GitHub />,
    },
    {
      type: 'linkedin',
      data: 'mathew-hultquist',
      icon: <LinkedIn />,
    },
  ],
  skills: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5'],
  projects: [
    {
      title: 'Test Project 1',
      duties: [
        {
          title: 'Webpack',
          point: '> ',
        },
        {
          title: 'Vercel',
          point: '> ',
        },
      ],
    },
    {
      title: 'Test Project 2',
      duties: [
        {
          title: 'Webpack',
          point: '> ',
        },
        {
          title: 'Vercel',
          point: '> ',
        },
      ],
    },
  ],
  workExperience: [
    {
      title: 'Test Experience 1',
      subTitle: 'Some date range here i suppose',
      duties: [
        {
          title: 'duty 1',
          point: '> ',
        },
        {
          title: 'duty 2',
          point: '> ',
        },
        {
          title: 'duty 3',
          point: '> ',
        },
        {
          title: 'duty 4',
          point: '> ',
        },
        {
          title: 'duty 5',
          point: '> ',
        },
        {
          title: 'duty with a really really really really really  long title',
          point: '> ',
        },
      ],
    },
    {
      title: 'Test Experience 2',
      subTitle: 'Some date range here i suppose',
      duties: [
        {
          title: 'duty 1',
          point: '> ',
        },
        {
          title: 'duty 2',
          point: '> ',
        },
        {
          title: 'duty 3',
          point: '> ',
        },
        {
          title: 'duty 4',
          point: '> ',
        },
        {
          title: 'duty 5',
          point: '> ',
        },
        {
          title: 'duty with a really really really really really  long title',
          point: '> ',
        },
      ],
    },
  ],
};
