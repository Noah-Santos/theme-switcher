import {useContext} from 'react';
import {StyleContext} from '../App'

const Header = () => {
    let {theme} = useContext(StyleContext);

    return (
        <div className={theme==='light' ? 'header' : 'header darkHeader'}>American WW2 Vehicles</div>
    )
}

export default Header;