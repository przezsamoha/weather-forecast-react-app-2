import { createContext, useState } from 'react';

type ThemeContextProps = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextProps>('light');
