import React from 'react';
import { Data } from '../types/data';
import { GitHub, LinkedIn, Mail, Phone } from '../assets/icons';
import { Text } from '@react-pdf/renderer';

export const colors = {
  textColor: '#02010A',
  backgroundColor: '#FEFFF8',
  primaryColor: '#519872',
  secondaryColor: '#00747A',
};

export const data: Data = {
  name: 'John Doe',
  position: 'Some Position',
  professionalSummary:
    'As a highly skilled and motivated web developer with over 5 years of experience, I have a proven track record of delivering innovative and functional web solutions to clients. I have extensive knowledge of web development technologies such as HTML, CSS, JavaScript, and PHP, as well as experience with popular content management systems like WordPress and Shopify. I am well-versed in both front-end and back-end development, and I have a strong understanding of user experience design and responsive web design. I am also familiar with agile development methodologies and have a strong ability to collaborate effectively with cross-functional teams. My passion for web development and commitment to staying current with industry trends and advancements make me a valuable asset to any organization.',
  contacts: [
    {
      type: 'phone',
      data: '+1 (999) 999-9999',
      icon: <Phone color={colors.secondaryColor} width={18} height={18} />,
    },
    {
      type: 'email',
      data: 'email@example.com',
      icon: <Mail color={colors.secondaryColor} width={18} height={18} />,
    },
    {
      type: 'github',
      data: 'example',
      icon: <GitHub color={colors.secondaryColor} width={18} height={18} />,
    },
    {
      type: 'linkedin',
      data: 'john-smith',
      icon: <LinkedIn color={colors.secondaryColor} width={18} height={18} />,
    },
  ],
  skills: {
    data: [
      'Webpack',
      'Ruby',
      'TypeScript',
      'JavaScript',
      'React',
      'NodeJs',
      'Express',
    ],
    point: '>',
  },
  projects: [
    {
      title: 'E-Commerce Example',
      // You can either provide a description or bullet points on the technologies used or a mixture of the two.
      duties: [
        {
          title:
            'Designed and developed a fully functional e-commerce website for a retail company, featuring a user-friendly interface, secure payment gateway, and product management system.',
        },
        {
          title: 'Webpack',
          point: '>',
        },
        {
          title: 'Redux',
          point: '>',
        },
        {
          title: 'React',
          point: '>',
        },
        {
          title: 'Express',
          point: '>',
        },
      ],
    },
    {
      title: 'Responsive Portfolio Website',
      duties: [
        {
          title:
            'Built a custom portfolio website for a freelance graphic designer, incorporating responsive design and smooth animations.',
        },
        {
          title: 'Webpack',
          point: '>',
        },
        {
          title: 'Redux',
          point: '>',
        },
        {
          title: 'React',
          point: '>',
        },
        {
          title: 'Express',
          point: '>',
        },
      ],
    },
    {
      title: 'Job Board Website',
      duties: [
        {
          title:
            'Created a job board website for a human resources company, complete with advanced search functionality, resume submissions, and email notifications.',
        },
        {
          title: 'Webpack',
          point: '>',
        },
        {
          title: 'Redux',
          point: '>',
        },
        {
          title: 'React',
          point: '>',
        },
        {
          title: 'Express',
          point: '>',
        },
      ],
    },
  ],
  workExperience: [
    {
      title: 'Website Developer',
      subTitle: (
        <Text>
          <Text style={{ color: colors.secondaryColor }}>
            December 2020 - Present |{' '}
          </Text>
          E-Commerce Inc.
        </Text>
      ),
      duties: [
        {
          title:
            'Designed and implemented a custom e-commerce website for a retail company, resulting in a 50% increase in online sales.',
          point: '> ',
        },
        {
          title:
            'Utilized WooCommerce plugin to integrate with existing payment gateway and manage product inventory.',
          point: '> ',
        },
        {
          title:
            'Implemented user-friendly interface with responsive design and smooth user experience.',
          point: '> ',
        },
        {
          title:
            'Created custom product pages with detailed product descriptions, images, and user reviews.',
          point: '> ',
        },
        {
          title:
            'Utilized SEO optimization techniques to increase organic traffic and improve search engine rankings.',
          point: '> ',
        },
      ],
    },
    {
      title: 'Software Developer',
      subTitle: (
        <Text>
          <Text style={{ color: colors.secondaryColor }}>
            December 2020 - Present |{' '}
          </Text>
          Responsive Website LLC.
        </Text>
      ),
      duties: [
        {
          title:
            'Developed a custom portfolio website for a freelance graphic designer using HTML, CSS, and JavaScript.',
          point: '> ',
        },
        {
          title:
            'Incorporated responsive design to ensure website was optimized for desktop, tablet, and mobile devices.',
          point: '> ',
        },
        {
          title:
            'Implemented smooth animations and transitions to enhance user experience.',
          point: '> ',
        },
        {
          title:
            'Integrated with Behance API to display portfolio projects and increase visibility.',
          point: '> ',
        },
      ],
    },
  ],
};
