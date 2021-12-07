import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import { UsersContextProvider } from './hooks/users';
import GlobalStyles from './styles/GlobalStyles';
import { Header } from './components/Header';

const App: React.FC = () => (
  <BrowserRouter>
    <UsersContextProvider>
      <Header />
      <Routes />
    </UsersContextProvider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
