import { FCBriefcase } from '@icongo/fc';
import { ICIconEducation } from '@icongo/ic';

interface ITimelineData {
  type: string;
  icon: any;
  since: string;
  until: string;
  title: string;
  company: string;
  address: string;
  site: string;
  details: Array<string>;
}

const VerticalTimelineElementData = ({ since, until, icon, ...props }: ITimelineData) => ({
  elementProps: {
    date: [since, until].filter(Boolean).join(' - '),
    contentStyle: {
      background: 'rgba(33, 33, 33, 0.5)',
      color: '#ddd',
    },
    contentArrowStyle: {
      borderRight: '10px solid #ccc',
    },
    iconStyle: {
      background: '#2d1950',
    },
    icon: icon,
  },
  ...props,
});

const Experiences = [
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: 'Sep 2008',
    until: 'Mar 2012',
    title: 'Bachelor of Computer Science',
    company: 'Thomas Edison State University',
    address: 'Trenton, N.J. United States',
    site: 'https://www.tesu.edu/',
    details: ['Computer Science', 'Computer Graphics', 'Web Programming'],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Feb 2013',
    until: 'Dec 2016',
    title: 'Junior Web Developer',
    company: 'Spenny For Hire',
    address: 'Alberta, Canada(remote)',
    site: 'https://spennyforhire.ca/',
    details: [
      'Collaborated with senior developers and designers to develop and customize websites, utilizing a variety of technologies and platforms including WordPress, HTML, CSS, JavaScript, PHP, and MySQL.',
      'Assisted in back-end development tasks, such as database management, server-side scripting, and API integrations, to enhance website functionality and performance.',
      'Played a key role in expanding the service portfolio, resulting in a 20% increase in service offerings.',
      'Worked closely with the SEO team to implement technical SEO elements, conduct keyword research, optimize meta tags, and improve website visibility and search engine rankings.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Feb 2017',
    until: 'June 2019',
    title: 'Full Stack Developer',
    company: 'Hollar',
    address: 'Commerce, CA, United States',
    site: 'http://hollar.com/ ',
    details: [
      'Collaborated with the development team to design, develop, and maintain the Hollar ecommerce website built on WooCommerce, utilizing WordPress as the content management system (CMS).',
      'Worked on back-end development tasks using PHP and MySQL to customize and extend WooCommerce functionalities, including product management, checkout process, payment gateways integration, and order processing',
      'Integrated third-party APIs and services, including payment gateways, shipping services, and marketing tools, to enhance website functionality and improve the overall customer experience',
      'Enforced SEO best practices, refined meta tags, product descriptions, and URLs to improve search engine visibility, organic traffic, and search engine rankings for key product categories and pages.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Oct 2019',
    until: 'Dec 2021',
    title: 'SEO Specialist',
    company: "Macy's",
    address: 'New York, US(remote)',
    site: 'https://www.macys.com/',
    details: [
      'Optimized meta titles, descriptions, and URLs for product pages, leading to a 40% increase in search engine visibility and a 25% rise in click-through rates.',
      "Monitored backlink profiles, disavowed toxic links, and implemented effective link-building strategies, resulting in a 30% increase in the website's authority and trustworthiness, as measured by domain authority and search engine rankings",
      'Boosted Google My Business (GMB) profile, ensuring accurate business information, reviews management, and local citations for improved local search rankings',
      'Created and refined landing pages for targeted geographic areas, incorporating local keywords and Geo-modifiers to attract organic local search traffic.',
      'Applied SEO strategies tailored to ecommerce, including keyword research, product page optimizations, and category structure enhancements.',
      'Utilized tools like Google Analytics, Search Console, and SEO plugins to monitor website performance, track keyword rankings, and analyze user behavior',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Feb 2022',
    until: 'Feb 2024',
    title: 'Senior MERN Stack Developer',
    company: 'Aliio Inc.',
    address: 'Canada, Edmonton(Remote)',
    site: 'https://aliio.tech/',
    details: [
      'Guided the development team in successfully creating and maintaining over 10 web applications using the MERN stack for clients across diverse industries. Achieved an average client satisfaction rating of 4.8 out of 5, resulting in a 30% increase in repeat business and referrals.',
      'Integrated social media APIs and functionalities into web applications, enabling seamless sharing and interaction with social networks such as Facebook, Twitter, and LinkedIn.',
      'Leveraged collaboration tools such as GitHub for code hosting, issue tracking, and pull request management. Accomplished CI/CD pipelines using tools like Jenkins for automated testing and deployment workflows',
      'Executed monitoring tools such as New Relic to track application performance, identify bottlenecks, and troubleshoot issues in real-time.',
      'Collaborated with DevOps engineers to deploy web applications to production environments using containerization technologies like Docker and orchestration tools like Kubernetes. Applied scalability solutions, autoscaling policies, and disaster recovery plans to ensure high availability and reliability of applications.',
    ],
  }),
].sort(({ since: as, until: au }: any, { since: bs, until: bu }: any) => (as > bs || au > bu ? 1 : -1));

export default Experiences;
