export const home = {
  path: '/home',
  name: 'home',
  meta: {
    title: 'menus.home',
    icon: 'home',
    i18n: true,
  },
  component: () =>
    import(/* webpackChunkName: "about" */ '@/views/home/index.vue'),
};

export default {
  path: '/',
  name: 'layout',
  meta: {
    title: 'menus.home',
    icon: 'home',
    i18n: true,
  },
  redirect: '/home',
  component: () => import('@/layout/index.vue'),
  children: [home],
};
