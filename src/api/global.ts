export const getAsyncRoutes = (data: { name: string }) => {
  return Promise.resolve({
    code: 0,
    data: [
      {
        path: '/template',
        name: 'template',
        meta: {
          type: 0,
          showLink: true,
          i18n: true,
          title: 'menus.template',
          icon: 'modular',
        },
        children: [
          {
            path: '/template/table/index',
            name: 'template/table',
            meta: {
              type: 1,
              showLink: true,
              i18n: true,
              title: 'menus.table',
              keepAlive: true,
            },
          },
          {
            path: '/template/swiper/index',
            name: 'template/swiper',
            meta: {
              type: 1,
              showLink: true,
              i18n: true,
              title: 'menus.swiper',
              keepAlive: true,
            },
          },
        ],
      },
      {
        path: '/system',
        name: 'system',
        meta: {
          type: 0,
          showLink: true,
          i18n: true,
          title: 'menus.systemManagement',
          icon: 'system',
        },
        children: [
          {
            path: '/system/role/index',
            name: 'system-role',
            meta: {
              type: 1,
              showLink: true,
              i18n: true,
              title: 'menus.permissionRole',
              keepAlive: true,
            },
            children: [
              {
                title: 'buttons.hsadd',
                path: '/system/role/index/edit',
                type: 2,
                buttonType: 'add',
              },
            ],
          },
          {
            path: '/system/menus/index',
            name: 'system-menus',
            meta: {
              type: 1,
              showLink: true,
              i18n: true,
              title: 'menus.menusManagement',
            },
          },
        ],
      },
      {
        name: 'Nested',
        path: '/nested',
        meta: {
          title: 'menus.menus',
          showLink: true,
          i18n: true,
          type: 0,
          icon: 'menu',
        },
        children: [
          {
            name: 'Menu1',
            path: '/nested/menu1',
            meta: {
              title: 'menus.menu1',
              showLink: true,
              i18n: true,
              type: 0,
            },
            children: [
              {
                name: 'Menu1-1',
                path: '/nested/menu1/menu1-1/index',
                meta: {
                  title: 'menus.menu1-1',
                  showLink: true,
                  i18n: true,
                  type: 1,
                },
              },
              {
                name: 'Menu1-2',
                path: '/nested/menu1/menu1-2',
                meta: {
                  title: 'menus.menu1-2',
                  showLink: true,
                  i18n: true,
                  type: 0,
                },
                children: [
                  {
                    name: 'Menu1-2-1',
                    path: '/nested/menu1/menu1-2/menu1-2-1/index',
                    meta: {
                      title: 'menus.menu1-2-1',
                      showLink: true,
                      i18n: true,
                      type: 1,
                      keepAlive: true,
                    },
                  },
                  {
                    name: 'Menu1-2-2',
                    path: '/nested/menu1/menu1-2/menu1-2-2/index',
                    meta: {
                      title: 'menus.menu1-2-2',
                      showLink: true,
                      i18n: true,
                      type: 1,
                    },
                  },
                ],
              },
              {
                name: 'Menu1-3',
                path: '/nested/menu1/menu1-3/index',
                meta: {
                  title: 'menus.menu1-3',
                  showLink: true,
                  i18n: true,
                  type: 1,
                },
              },
            ],
          },
          {
            name: 'Menu2',
            path: '/nested/menu2/index',
            meta: {
              title: 'menus.menu2',
              showLink: true,
              i18n: true,
              type: 1,
            },
          },
        ],
      },
    ],
  });
};
