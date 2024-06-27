import react, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee'
import PricesContext from './PricesContext';

function Navbar(){
    const [isToggled, setIsToggled] = useState(false);
    const { prices } = useContext(PricesContext);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const closeMenu = () => {
        setIsToggled(false);
    };
    
    return (
            <header>
                <div className="rates">
                    <Marquee>
                        Welcome to Choksi Shamalji Vallabhji &emsp; Today's Gold Rates &#40;{prices["Date"]}&#41; &emsp; 22K: Rs.{prices["22K"]}, &emsp; 18K: Rs.{prices["18K"]} &emsp;&emsp;&emsp;
                    </Marquee>
                </div>
                <div className="navbar-brand">
                    <div className="Logo"><img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1718630691/ejsuarmodhmnpzr5viyr.png' alt="Logo"/></div>
                    <div className="Name">
                        <Link to={'/'}>CHOKSI SHAMALJI VALLABHJI</Link>
                    </div>
                    <div className="social-media">
                        <a href="https://instagram.com/choksi_shamalji_vallabhji?igshid=MzRlODBiNWFlZA==" target='_blank'><i class='fa-brands fa-instagram'></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100063988777446&mibextid=LQQJ4d" target='_blank'><i class='fa-brands fa-facebook'></i></a>
                    </div>
                    <div className="toggle-btn" onClick={handleToggle}>
                        <span className={isToggled ? 'span1 active' : 'span1'}></span>
                        <span className={isToggled ? 'span2 active' : 'span2'}></span>
                    </div>
                </div>
                
                <div className={`navbar-list ${isToggled ? 'show' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to={'/'} className="list-item" onClick={closeMenu}>Home</Link></li>
                        <li><Link to={'/aboutus'} className="list-item" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to={'/collection'} className="list-item" onClick={closeMenu}>Collection</Link></li>
                        <li><Link to={'/contactus'} className="list-item" onClick={closeMenu}>Contact Us</Link></li>
                    </ul>
                </div>
                
            </header>
    )
}

export default Navbar
