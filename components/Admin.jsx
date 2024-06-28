import { useContext, useState } from "react"
import React from 'react'
import PricesContext from "../components/PricesContext";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [prices, setPrices] = useState({ "22K": "", "18K": ""});
  const { fetchGist } = useContext(PricesContext);
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '2650286') { // replace 'yourPassword' with the actual password
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrices(prevPrices => ({
      ...prevPrices,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toDateString();

    const updateGist = async (updatedPrices) => {
      const gistId = "13583f27f0799d24d6970e94906eb526"; // Replace with your gist ID
      const accessToken = process.env.VITE_GITHUB_TOKEN; // Replace with your GitHub personal access token

      try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`, {
          method: 'PATCH',
          headers: {
            Authorization: `token ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            files: {
              'rates.json': {
                content: JSON.stringify(updatedPrices, null, 2),
              },
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update gist');
        }

        return response.json();
      } catch (error) {
        console.error('Error updating gist:', error);
        throw error;
      }
    };

    try {
      await updateGist({
        "22K": prices["22K"],
        "18K": prices["18K"],
        "Date": date,
      });

      alert("Prices updated successfully!");
      setIsAuthenticated(false);
      setPrices({ "22K": "", "18K": "" });
      setPassword('');
      fetchGist();
    } catch (error) {
      console.error('Failed to update prices:', error);
      alert('Failed to update prices. Please try again.');
    }
  };


  return (
    <>
       {!isAuthenticated ? (
        <form onSubmit={handlePasswordSubmit} className="adminForm">
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="adminForm2">
          <label>
            22K:
            <input type="text" name="22K" value={prices["22K"]} onChange={handleInputChange} required/>
          </label>
          <br />
          <label>
            18K:
            <input type="text" name="18K" value={prices["18K"]} onChange={handleInputChange} required/>
          </label>
          <br />
          <button type="submit">Update Prices</button>
          {/* <button type="submit">Get updated prices!</button> */}
        </form>
      )}
    </> 
    
  )
}

export default Admin
