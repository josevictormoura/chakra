import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

export const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        white: { value: '#fff' },
        gray: {
          50: { value: '#fafafa' },
          100: { value: '#F8F8F8 ' },
          200: { value: '#F5F5F5' },
          300: { value: '#E2E2E2' },
          400: { value: '#5C5C5C' },
          500: { value: '#4F4F4F' },
        },
        green: {
          200: { value: '#85DA98' },
          300: { value: '#43C660' },
          400: { value: '#43BD5E' },
          500: { value: '#44C660' },
          600: { value: '#2FA849' },
          700: { value: '#33AA4D' },
        },
        yellow: {
          400: { value: '#FF9D00' },
        },
        red: {
          300: { value: '#FF4848' },
        },
        black: { value: '#010101' },
        accent: { value: '#0d6efd' },
        background: { value: '#fff' },
      },
      radii: {
        sm: { value: '0.4rem' },
        md: { value: '0.6rem' },
      },
      shadows: {
        sm: { value: '0 8px 8px rgba(0, 0, 0, 0.08)' },
      },
      fonts: {
        body: { value: 'var(--lato), sans-serif' },
      },
      fontWeights: {
        light: { value: '300' },
        normal: { value: '400' },
        bold: { value: '600' },
      },
      fontSizes: {
        xxxxsmall: { value: '0.8rem' },
        xxxsmall: { value: '1.2rem' },
        xxsmall: { value: '1.4rem' },
        xsmall: { value: '1.6rem' },
        small: { value: '2rem' },
        medium: { value: '2.4rem' },
        large: { value: '3.2rem' },
        xlarge: { value: '4rem' },
        xxlarge: { value: '4.8rem' },
        xxxlarge: { value: '5.6rem' },
        huge: { value: '6.4rem' },
      },
      spacing: {
        xxxsmall: { value: '0.8rem' },
        xxsmall: { value: '1rem' },
        xsmall: { value: '1.6rem' },
        small: { value: '2.4rem' },
        medium: { value: '3.2rem' },
        large: { value: '4rem' },
        xlarge: { value: '4.8rem' },
        xxlarge: { value: '5.6rem' },
      },
      zIndex: {
        base: { value: '10' },
        menu: { value: '20' },
        overlay: { value: '30' },
        modal: { value: '40' },
        alwaysOnTop: { value: '50' },
      },
    },
  },
});

export const defaultSystem = createSystem(defaultConfig, theme);
