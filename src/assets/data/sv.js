import { servicesSwe } from './servicesData'
import { staffDataSwe } from './staffData';
import { aboutUsDataSwe } from './aboutUsData';
import { blogPostsSwe } from './blogPostData';


export default {
  navbar: {
    about: 'Om oss',
    blog: 'Blogg',
    questions: 'Vanliga Frågor',
    contact: 'Kontakt',
  },

  startPage: {
    title: 'Välkommen till Hundkojans hunddagis',
    ourServices: {
      title: 'Våra tjänster',
      servicesData: servicesSwe,
    }
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
  },

  footer: {
    about: "Om oss",
    blog: "Blogg",
    questions: "Vanliga frågor",
    contact: "Kontakt"
  },

  faq: {
    title: 'Vanliga Frågor',
    subHeading:
      'Självklart har du som ägare av en fyrbent vän många frågor. Här har vi samlat de vanligaste frågorna med svar. Skulle svaret på din fråga inte finnas är du välkommen att kontakta oss',
    link: ' här!',
    questions: [
      {
        title: 'Hur många hundar tar ni emot samtidigt?',
        answer: '',
      },
      {
        title: 'Hur ser en dag ut hos er?',
        answer: '',
      },
      {
        title: 'Hur lång tid tar det att få en dagisplats?',
        answer: '',
      },
      {
        title: 'Tar ni emot alla raser?',
        answer: '',
      },
      {
        title: 'Kan man ha hundar över natten hos er?',
        answer: '',
      },
      {
        title: 'Tar ni emot okastrerade hundar?',
        answer: '',
      },
    ],
  },

  about: {
    aboutUs: {
      title: '- Vi tar hand om din bästa vän!',
      aboutUsData: aboutUsDataSwe
    },

    ourServices: {
      title: 'Våra tjänster',
      servicesData: servicesSwe
      
    },

    ourStaff: {
      title: 'Vår personal',
      staffData: staffDataSwe
    },
  },

  blog: {
    title: 'Hundkojans blogg',
    publishedText: 'publicerat av',
    blogPostData: blogPostsSwe
  },
}
