type LayoutInfoType = {
  layout: string;
  theme: 'light' | 'dark'; //light,dark
  themeStyle: string; //primary,white
};

import { eternal } from '@/utils/stroage';

const layoutKey = 'fine-admin-layout';

export function getLayoutInfo() {
  return (
    (JSON.parse(eternal.get(layoutKey) as string) as LayoutInfoType) || {
      layout: 'vertical',
      theme: 'light',
      themeStyle: 'primary',
    }
  );
}

export function setLayoutInfo(
  key: keyof LayoutInfoType,
  value: LayoutInfoType[keyof LayoutInfoType],
  target: any
) {
  const { layout, theme, themeStyle } = target;

  const info = {
    layout,
    theme,
    themeStyle,
    [key]: value,
  };
  eternal.set(layoutKey, info);
}
