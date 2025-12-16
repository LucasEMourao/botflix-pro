// Design tokens and theme configuration
export const colors = {
  primary: {
    main: '#e50914', // Netflix red
    light: '#f40612',
    dark: '#c50812',
  },
  secondary: {
    main: '#000', // Black
    light: '#141414',
    dark: '#000',
  },
  neutral: {
    white: '#fff',
    gray: '#808080',
    lightGray: '#ebebeb',
    darkGray: '#222',
    darkestGray: '#1e1e28',
  },
  text: {
    primary: '#fff',
    secondary: '#d0d0d0',
    disabled: '#808080',
  },
  background: {
    primary: '#000',
    secondary: 'rgba(255, 255, 255, 0.1)',
    overlay: 'rgba(0, 0, 0, 0.8)',
  },
  rating: {
    star: '#e50914',
  },
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

export const breakpoints = {
  xs: '480px',
  sm: '600px',
  md: '768px',
  lg: '900px',
  xl: '1200px',
};

export const borderRadius = {
  sm: '8px',
  md: '16px',
  lg: '19px',
  xl: '24px',
  round: '50%',
};

export const typography = {
  fontFamily: `'Inter', system-ui, sans-serif`,
  sizes: {
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '21px',
    xxxl: '24px',
    xxxx: '32px',
    title: '48px',
    hero: '64px',
  },
  weights: {
    thin: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const shadows = {
  sm: '0 4px 8px rgba(0, 0, 0, 0.1)',
  md: '0 4px 24px 0 rgba(0, 0, 0, 0.18)',
  lg: '0 8px 32px 0 rgba(0, 0, 0, 0.28)',
  hover: '0 10px 25px rgba(229, 9, 20, 0.3)',
};

export const transitions = {
  fast: 'all 0.1s ease',
  normal: 'all 0.2s ease',
  slow: 'all 0.3s ease',
};

export const theme = {
  colors,
  spacing,
  breakpoints,
  borderRadius,
  typography,
  shadows,
  transitions,
};