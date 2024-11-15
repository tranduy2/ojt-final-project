import GoogleIC from '../assets/svgs/Google.svg';
import AppleIC from '../assets/svgs/Apple.svg';
import FbIC from '../assets/svgs/Fb.svg';
import { useTranslation } from 'react-i18next';

export const useAuthenticationTypes = () => {
  const { t } = useTranslation();
  return [
    {
      text: t('common.button.signIn'),
      value: 'sign-in',
      path: '/sign-in',
    },
    {
      text: t('common.button.register'),
      value: 'register',
      path: '/#',
    },
  ];
};

export const thirdMethod = [
  { logo: GoogleIC, value: 'Google' },
  { logo: AppleIC, value: 'Apple' },
  { logo: FbIC, value: 'Facebook' },
];
