import {useContext} from 'react';
import {StyleContext} from '../App'

const Footer = () => {
    let {theme} = useContext(StyleContext);

    return (
        <div className='footerCont'>
            <div className="contact">
                <p className="contactSection"><span className="contactTitle">Email: </span> nsanto591@west-mec.org</p>
                <p className="contactSection"><span className="contactTitle">GitHub: </span>Noah-Santos</p>
            </div>
        </div>
    )
}

export default Footer;