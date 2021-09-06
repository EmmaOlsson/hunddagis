import { servicesEng } from "./servicesData"

export default {
  navbar: {
    about: 'About',
    blog: 'Blog',
    questions: 'Questions',
    contact: 'Contact',
  },

  startPage: {
    title: 'Welcome to Hundkojans Hunddagis',
    ourServices: {
      title: 'Our services',
      servicesData: servicesEng,
    }
  },

  contact: {
    title: 'Contact us',

    contactDetails: {
      title: 'Contact Details',
      name: 'Name:',
      address: 'Address:',
      phone: 'Phone:',
      Email: 'E-mail:',
    },
  },

  faq: {
    title: 'Questions',
    subHeading:
      'Of course, as the owner of a four-legged friend, you have many questions. Here we have collected the most common questions with answers. Should the answer to your question not be available, you are welcome to contact us',
    link: ' here!',
    questions: [
      {
        title: 'How many dogs do you receive at the same time?',
        answer: '',
      },
      {
        title: 'What does a day look like with you?',
        answer: '',
      },
      {
        title: 'How long does it take to get a kindergarten place?',
        answer: '',
      },
      {
        title: 'Do you accept all races?',
        anwser: '',
      },
      {
        title: 'Can you have dogs with you overnight?',
        answer: '',
      },
      {
        title: 'Do you accept unneutered dogs?',
        answer: '',
      },
    ],
  },

  about: {
    title: '- We take care of your best friend',

    firstParagraph:
      'You will find the kennel on a large family farm just 5 minutes from the center of Helsingborg. The yard has large fenced outdoor areas where your four-legged friend can run free with other four-legged friends. The indoor part was renovated in 2020 and there are both social and individual spaces, all to make your dog feel safe.',

    secondParagraph:
      'Hundkojan ser till att din vovve både får lugn och ro, aktivering, stimulans och härligt umgänge med andra hundar – så att du kan göra det du behöver göra!',

    thirdParagraph: 'You choose which service suits you and your dog best!',

    fourthParagraph:
      'Smulan and Bosse Hundsson founded Hundkojan AB in 1998 and have since gathered many four-legged friends around Skåne. The operation is approved by the County Administrative Board.',

    ourServices: {
      title: 'Our services',

      fullTime: {
        time: 'Full time',
        days: '4-5 days a week',
        price: '2,990 SEK a month',
      },
      partTime: {
        time: 'Part time',
        days: '2-3 days a week',
        price: '2,290 SEK a month',
      },
      flex: {
        time: 'Flexible time',
        price: '350 SEK for a day',
      },
    },

    ourStaff: {
      title: 'Our staff',
    },
  },

  blog: {
    postsArticle: {
      title: 'Blog',
    },

    Pictures: {
      title: 'Latest pictures',
    },
}
}