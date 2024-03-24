import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: '✨ Nice Things',
  brandUrl: 'https://drupalsouth.org/events/drupalsouth-sydney-2024/schedule/3008',
  brandImage: 'https://drupalsouth.org/sites/default/files/2024-02/DS-Sydney-2024_Logo_Medium.png',
  brandTarget: '_blank',
  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',
  // #5c6cd5
  colorPrimary: '#f5d14a',
  colorSecondary: '#f76246',

  // UI
  appBg: '#ece7d6',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#0f0926',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#f76246',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
