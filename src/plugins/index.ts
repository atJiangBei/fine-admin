import { App } from 'vue';

import { usI18n } from './i18n/index';
const usePlugins = (app: App) => {
  usI18n(app);
  return app;
};

export default usePlugins;
