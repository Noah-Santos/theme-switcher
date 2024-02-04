import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Header from './Components/Header';
import {createContext, useState} from 'react';
import {data} from './data';

export const StyleContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [info, setInfo] = useState(data);

  return (
    <>
      <div className={theme==='light' ? 'contentHome' : 'contentHome darkContentHome'}>
          <StyleContext.Provider value={{theme, setTheme, info}}>
            <Header></Header>
            <Nav></Nav>
            <Content></Content>
            <Footer></Footer>
          </StyleContext.Provider>
        </div>
    </>
  );
}

export default App;
