import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Modulos',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Historico Pozo',
        link: '/pages/forms/historyfield',
      },
      {
        title: 'Historico Campo',
        link: '/pages/forms/historywell',
      },
      {
        title: 'Prediccion',
        link: '/pages/forms/prediction',
      },
    ],
  },
  {
    title: 'Carga',
    icon: 'grid-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
