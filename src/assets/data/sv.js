import { servicesSwe } from './servicesData';
import { staffDataSwe } from './staffData';
import { aboutUsDataSwe } from './aboutUsData';
import { blogPostsSwe } from './blogPostData';
import { formSwe } from './formData';
import { questionsSwe } from './Faq';
import { blogFiltersSwe } from './blogFilter';

export const sv = {
  navbar: {
    about: 'Om oss',
    blog: 'Blogg',
    questions: 'Vanliga Frågor',
    contact: 'Kontakt',
  },

  startPage: {
    title: 'Hundkojans hunddagis',
    openingHours: {
      title: 'Våra öppettider:',
      dropOff: 'Inlämning: 07:00 - 09:00',
      pickUp: 'Hämtning: 14:00 - 17:30',
    },
    ourServices: {
      title: 'Våra tjänster',
      servicesData: servicesSwe,
    },
    signUp: {
      title: 'Intresserad av en plats?',
      signUp: 'Skicka ansökan',
    },
  },

  contact: {
    title: 'Kontakta oss',

    contactDetails: {
      title: 'Kontaktuppgifter',
      name: 'Namn:',
      address: 'Adress:',
      phone: 'Telefon:',
      Email: 'E-post:',
    },

    contactForm: {
      title: 'Kontaktformulär',
      formData: formSwe,
    },
  },

  footer: {
    about: 'Om oss',
    blog: 'Blogg',
    questions: 'Vanliga frågor',
    contact: 'Kontakt',
  },

  faq: {
    title: 'Vanliga Frågor',
    subHeading:
      'Självklart har du som ägare av en fyrbent vän många frågor. Här har vi samlat de vanligaste frågorna med svar. Skulle svaret på din fråga inte finnas är du välkommen att kontakta oss',
    link: ' här!',
    questions: questionsSwe,
  },

  about: {
    aboutUs: {
      title: '- Vi tar hand om din bästa vän!',
      aboutUsData: aboutUsDataSwe,
    },

    ourServices: {
      title: 'Våra tjänster',
      servicesData: servicesSwe,
    },

    ourStaff: {
      title: 'Vår personal',
      staffData: staffDataSwe,
    },
  },

  blog: {
    title: 'Hundkojans blogg',
    publishedText: 'Publicerat av',
    blogPostData: blogPostsSwe,
    filter: blogFiltersSwe,
  },
};
