import react, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee'

function Navbar(){
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const closeMenu = () => {
        setIsToggled(false);
    };

    const [prices, setPrices] = useState({ "22K": "", "18K": "", "Date": ""});

    useEffect(()=>{
        const fetchGist = async () => {
            try {
              const gistId = process.env.GITHUB_GIST_ID; // Replace with your gist ID
              const response = await fetch(`https://api.github.com/gists/${gistId}`);
              if (!response.ok) {
                throw new Error('Failed to fetch gist');
              }
              const gist = await response.json();
              // Assuming your JSON file is named 'data.json' in the gist
              const content = gist.files['rates.json'].content;
              const parsedData = JSON.parse(content);
              setPrices(parsedData);
            } catch (error) {
              console.error('Error fetching gist:', error);
            }
          };
      
          fetchGist();

          // Set up polling to fetch prices every 10 seconds
        const intervalId = setInterval(fetchGist, 10000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, [])
    

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
