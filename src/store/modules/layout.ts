import { defineStore } from 'pinia';
import { store } from '@/store';
import themeVar from '@/style/theme.module.less';
import { getLayoutInfo, setLayoutInfo } from '@/utils/layout';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => {
    console.log(getLayoutInfo());
    const { layout, theme, themeStyle } = getLayoutInfo();
    return {
      opened: true,
      themeColorMap: themeVar as Record<string, string>,
      layout: layout, //horizontal//inline//vertical
      theme: theme, //light,dark
      themeStyle: themeStyle, //primary,white
    };
  },
  actions: {
    toggleAside() {
      this.opened = !this.opened;
    },
    toggleTheme(theme: 'light' | 'dark') {
      this.theme = theme;
      setLayoutInfo('theme', theme, this);
    },
    toggleLayout(layout: 'vertical' | 'horizontal') {
      this.layout = layout;
      setLayoutInfo('layout', layout, this);
    },
    toggleThemeStyle(themeType: string) {
      this.themeStyle = themeType;
      setLayoutInfo('themeStyle', themeType, this);
    },
  },
});

export function useLayoutStoreHook() {
  return useLayoutStore(store);
}
