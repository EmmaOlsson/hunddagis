import { staffDataEng } from './staffData'
import { servicesEng } from './servicesData'
import { aboutUsDataEng } from './aboutUsData'
import { blogPostsEng } from './blogPostData'

export default {
  navbar: {
    about: 'About',
    blog: 'Blog',
    questions: 'Questions',
    contact: 'Contact',
  },

  startPage: {
    title: 'Welcome to Hundkojans Hunddagis',
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
    aboutUs: {
      title: '- We take care of your best friend!',
      aboutUsData: aboutUsDataEng
    },

    ourServices: {
      title: 'Our services',
      servicesData: servicesEng
    },

    ourStaff: {
      title: 'Our staff',
      staffData: staffDataEng
    },
  },

  blog: {
    title: 'Blog post',
    blogPostData: blogPostsEng
  }
}