import { ICPGithubIconWhite } from '@icongo/ic';
import { LGGithubIcon, LGGoogleGmail } from '@icongo/lg';
import { AELinkedin } from '@icongo/ae/lib/AELinkedin';

const LinkInfos = [
  {
    href: 'mailto:wilcoxekenta@gmail.com',
    icon: {
      dark: LGGoogleGmail,
      light: LGGoogleGmail,
    },
    label: 'Google Mail',
  },
  {
    href: 'https://www.linkedin.com/in/wilcox-ekenta-3456041a1/',
    icon: {
      dark: AELinkedin,
      light: AELinkedin,
    },
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/poxii',
    icon: {
      dark: LGGithubIcon,
      light: ICPGithubIconWhite,
    },
    label: 'Github',
  },
];

export default LinkInfos;
