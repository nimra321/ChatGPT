
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { themeSettings } from './theme';
import { createTheme } from '@mui/material/styles';

import HomePage from './pages/homePage';
import Register from './pages/register';
import Login from './pages/login';
import Navbar from './components/navBar';
import Summary from './pages/summary';
import Paragraph from './pages/paragraph';
import ChatBot from './pages/chatbot';
import JsConverter from './pages/jsConverter';
import ScifiImage from './pages/scifiImage';


function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/summary' element={<Summary/>}/>
        <Route path="/paragraph" element={<Paragraph />} />
        <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
