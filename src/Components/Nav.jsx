import Switcher from './Switcher';
import {useContext} from 'react';
import {StyleContext} from '../App'

const Nav = () => {
  let {theme} = useContext(StyleContext);

  return (
    <>
      {/* determines whether or not to load the light or dark mode */}
      <div className={theme==='light' ? 'navCont' : 'navCont darkNav'}>
          <h1 className={theme==='light' ? '' : 'darkTitle'}>WW2 American Vehicles</h1>
          <Switcher></Switcher>
        </div>
    </>
  )
}

export default Nav;