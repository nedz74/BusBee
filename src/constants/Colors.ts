export const Colors = {
  primary: '#1a1a1a',
  secondary: '#fff',
  accent: '#FFD700',
  text: {
    primary: '#333',
    secondary: '#666',
    light: '#fff',
  },
  background: {
    primary: '#fff',
    secondary: '#1a1a1a',
  },
} as const;

export type Colors = typeof Colors;
