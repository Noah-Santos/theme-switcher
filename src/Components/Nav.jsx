import Switcher from './Switcher';
import {useContext} from 'react';
import {StyleContext} from '../App'

const Nav = () => {
  let {theme} = useContext(StyleContext);

  return (
    <div className='navCont'>
      <h1>Title</h1>
      <Switcher></Switcher>
    </div>
  )
}

export default Nav;