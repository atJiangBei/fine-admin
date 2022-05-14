import { siphonI18n } from './index';
// vxe-table组件国际化
// import zhVxeTable from "vxe-table/lib/locale/lang/zh-CN";
// import enVxeTable from "vxe-table/lib/locale/lang/en-US";

// element-plus国际化
import enLocale from 'element-plus/lib/locale/lang/en';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';

//en
import enButtons from './en/buttons';
import enMenus from './en/menus';

//zh
import zhButtons from './zh-CN/buttons';
import zhMenus from './zh-CN/menus';
console.log(zhMenus);

export const localesConfigs = {
  zh: {
    buttons: zhButtons,
    menus: zhMenus,
    //...siphonI18n(zhModules, "zh-CN"),
    //...zhVxeTable,
    ...zhLocale,
  },
  en: {
    buttons: enButtons,
    menus: enMenus,
    // ...siphonI18n(enModules, "en"),
    //...enVxeTable,
    ...enLocale,
  },
};
