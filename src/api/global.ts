const routesData = [
  {
    title: 'menus.systemManagement',
    path: '/system',
    name: 'system',
    type: 0,
    showLink: true,
    i18n: true,
    children: [
      {
        title: 'menus.permissionRole',
        path: '/system/role/index',
        name: 'system-role',
        type: 1,
        showLink: true,
        i18n: true,
        children: [
          {
            type: 2,
            title: 'buttons.hsadd',
            path: '/system/role/index/add',
            buttonType: 'add',
          },
          {
            type: 2,
            title: 'buttons.hsedit',
            path: '/system/role/index/edit',
            buttonType: 'edit',
          },
        ],
      },
      {
        title: 'menus.menusManagement',
        path: '/system/menus/index',
        name: 'system-menus',
        type: 1,
        showLink: true,
        i18n: true,
      },
      {
        title: 'menus.templateManagement',
        path: '/system/template/index',
        name: 'system-template',
        type: 1,
        showLink: true,
        i18n: true,
      },
    ],
  },
  {
    name: 'Nested',
    path: '/nested',
    title: 'menus.hsmenus',
    showLink: true,
    i18n: true,
    type: 0,
    children: [
      {
        name: 'Menu1',
        path: '/nested/menu1',
        title: 'menus.hsmenu1',
        showLink: true,
        i18n: true,
        type: 0,
        children: [
          {
            name: 'Menu1-1',
            path: '/nested/menu1/menu1-1/index',
            title: 'menus.hsmenu1-1',
            showLink: true,
            i18n: true,
            type: 1,
          },
          {
            name: 'Menu1-2',
            path: '/nested/menu1/menu1-2',
            title: 'menus.hsmenu1-2',
            showLink: true,
            i18n: true,
            type: 0,
            children: [
              {
                name: 'Menu1-2-1',
                path: '/nested/menu1/menu1-2/menu1-2-1/index',
                title: 'menus.hsmenu1-2-1',
                showLink: true,
                i18n: true,
                type: 1,
              },
              {
                name: 'Menu1-2-2',
                path: '/nested/menu1/menu1-2/menu1-2-2/index',
                title: 'menus.hsmenu1-2-2',
                showLink: true,
                i18n: true,
                type: 1,
              },
            ],
          },
          {
            name: 'Menu1-3',
            path: '/nested/menu1/menu1-3/index',
            title: 'menus.hsmenu1-3',
            showLink: true,
            i18n: true,
            type: 1,
          },
        ],
      },
      {
        name: 'Menu2',
        path: '/nested/menu2/index',
        title: 'menus.hsmenu2',
        showLink: true,
        i18n: true,
        type: 1,
      },
    ],
  },
];

export const getSyncRoutes = (data: { name: string }) => {
  return Promise.resolve({
    info: routesData,
  });
};
export const getAsyncRoutes = (data: { name: string }) => {
  return Promise.resolve({
    code: 0,
    data: [
      {
        path: '/system',
        name: 'system',
        meta: {
          type: 0,
          showLink: true,
          i18n: true,
          title: 'menus.systemManagement',
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
          title: 'menus.hsmenus',
          showLink: true,
          i18n: true,
          type: 0,
        },
        children: [
          {
            name: 'Menu1',
            path: '/nested/menu1',
            meta: {
              title: 'menus.hsmenu1',
              showLink: true,
              i18n: true,
              type: 0,
            },
            children: [
              {
                name: 'Menu1-1',
                path: '/nested/menu1/menu1-1/index',
                meta: {
                  title: 'menus.hsmenu1-1',
                  showLink: true,
                  i18n: true,
                  type: 1,
                },
              },
              {
                name: 'Menu1-2',
                path: '/nested/menu1/menu1-2',
                meta: {
                  title: 'menus.hsmenu1-2',
                  showLink: true,
                  i18n: true,
                  type: 0,
                },
                children: [
                  {
                    name: 'Menu1-2-1',
                    path: '/nested/menu1/menu1-2/menu1-2-1/index',
                    meta: {
                      title: 'menus.hsmenu1-2-1',
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
                      title: 'menus.hsmenu1-2-2',
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
                  title: 'menus.hsmenu1-3',
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
              title: 'menus.hsmenu2',
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
