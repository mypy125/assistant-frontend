import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './chatcomponent/them/theme';
import ChatComponent from './chatcomponent/chat/ChatComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatComponent />
    </ThemeProvider>
  );
}

export default App;
