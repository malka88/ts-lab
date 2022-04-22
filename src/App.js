import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes';

import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import Courses from './components/sections/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
      <Navigation />
        <Home />
        <Courses />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
