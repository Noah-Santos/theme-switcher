import Nav from './Components/Nav';
import Footer from './Components/Footer';
import {createContext, useState} from 'react';

export const StyleContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <div className={theme==='light' ? 'content' : 'content darkContent'}>
          <StyleContext.Provider value={{theme, setTheme}}>
            <Nav></Nav>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer></Footer>
          </StyleContext.Provider>
        </div>
    </>
  );
}

export default App;
