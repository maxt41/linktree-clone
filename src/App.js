import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Theme from './components/Theme';
import { Container } from '@mui/material';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import ThemeContextProvider from './context/ThemeContext';
import Links from './components/Links';

function App() {
    return (
      <ThemeContextProvider>
        <Container>
          <Theme />
          <Header />
          <Dropdown />
          <Links />
        </Container>
      </ThemeContextProvider>
    );
  }

export default App;
