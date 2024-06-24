import react, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Navbar(){
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const closeMenu = () => {
        setIsToggled(false);
    };

    const [prices, setPrices] = useState({ "22K": "", "18K": "", "BuyBack": "" , "Date": ""});

    useEffect(()=>{
        const fetchPrices = () => {
            fetch('https://csv-backend-4hc6.onrender.com/')
                .then(response => response.json())
                .then(data => setPrices(data))
                .catch(error => console.error('Error:', error));
        };

        // Fetch prices initially
        fetchPrices();

        // Set up polling to fetch prices every 10 seconds
        const intervalId = setInterval(fetchPrices, 10000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, [])
    

    return (
            <header>
                <div className="rates"><p>Welcome to Choksi Shamalji Vallabhji &emsp; Today's Gold Rates &emsp; 22K: Rs.{prices["22K"]}, &emsp; 18K: Rs.{prices["18K"]}, &emsp; BuyBack: Rs.{prices["BuyBack"]} &emsp; Updated On: {prices["Date"]}</p></div>
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
