import {useContext} from 'react';
import {StyleContext} from '../App'

const Footer = () => {
    let {theme} = useContext(StyleContext);

    return (
        <>
            {/* determines whether or not to load the light or dark mode */}
            <div className={theme==='light' ? 'footerCont' : 'footerCont darkFooter'}>
                <div className="contact">
                    <p className={theme==='light' ? 'contactSection' : 'contactSection darkContact'}><span className="contactTitle">Email: </span> nsanto591@west-mec.org</p>
                    <p className={theme==='light' ? 'contactSection' : 'contactSection darkContact'}><span className="contactTitle">GitHub: </span>Noah-Santos</p>
                </div>
            </div>
        </>
    )
}

export default Footer;