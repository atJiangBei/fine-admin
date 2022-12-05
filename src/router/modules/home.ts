/*
 *作为默认的首页，此处最好只有一个子元素来作为首页
 *原因：路径 /  作为默认home的父级，如果显示的话没有meta:{title}属性
 */
export default [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'menus.home',
      icon: 'home',
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/home/index.vue'),
  },
  // {
  //   path: '/table',
  //   name: 'table',
  //   meta: {
  //     title: 'menus.table',
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '@/views/table/index.vue'),
  // },
];
