import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

import { Orders, Sidebar } from './components';
import { sections } from './sections';
import { StyledContainer } from './styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9758a6',
      light: '#ae67c0',
      dark: '#784785',
      contrastText: '#fff'
    },
    mode: 'dark'
  }
});

export function Admin() {
  const [activeSection, setActiveSection] = useState(0);

  const Section = sections[activeSection].section;

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Sidebar {...{ activeSection, setActiveSection }} />
        <Section />
      </StyledContainer>
    </ThemeProvider>
  );
}
