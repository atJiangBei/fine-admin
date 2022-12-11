/*
 *作为默认的首页，此处最好只有一个子元素来作为首页
 *原因：路径 /  作为默认home的父级，如果显示的话没有meta:{title}属性
 */
import Layout from '@/layout/index.vue';
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
  component: Layout,
  children: [home],
};
