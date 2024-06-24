import PNG from '/graphics/PNG.png'
import react, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
            <header>
                <div className="rates">Live Rates</div>

                <div className="navbar-brand">
                    <div className="Logo"><img src="graphics/PNG.png" alt="Logo"/></div>
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
                        <li><Link to={'/'} className="list-item">Home</Link></li>
                        <li><Link to={'/aboutus'} className="list-item">About Us</Link></li>
                        <li><Link to={'/collection'} className="list-item">Collection</Link></li>
                        <li><Link to={'/contactus'} className="list-item">Contact Us</Link></li>
                    </ul>
                </div>
                
            </header>
    )
}

export default Navbar