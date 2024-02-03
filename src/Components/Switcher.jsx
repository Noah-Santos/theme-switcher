import {useContext} from 'react';
import {StyleContext} from '../App'

const Switcher = () => {
    // gets the theme and setTheme function from the createContext in order to change the mode
    let {theme, setTheme} = useContext(StyleContext);

    // function to set the new color theme
    function toggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    return (
        <>
            {/* determines whether or not to load the light or dark mode */}
            {theme==='light' ?
                <div className='switchCont'>
                    {/* toggles the toggleTheme function after click */}
                    <button onClick={toggleTheme} className='switchBtn'>Switch</button>
                </div> :
                <div className='switchCont darkSwitch'>
                    {/* toggles the toggleTheme function after click */}
                    <button onClick={toggleTheme} className='switchBtn darkSwitchBtn'>Switch</button>
                </div>
            }
        </>
    )
}

export default Switcher;