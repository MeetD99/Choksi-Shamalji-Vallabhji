import { useState } from "react"
import React from 'react'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [prices, setPrices] = useState({ "22K": "", "18K": ""});
  
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

  // const handleSubmit = (e) => {

  //   e.preventDefault();
  //   const date = new Date().toDateString();

  //   const updatePrice = async (key, value) => {
  //     try {
  //           const response = await fetch('http://localhost:3000/update', {
  //               method: 'POST',
  //               headers: {
  //                   'Content-Type': 'application/json'
  //               },
  //               body: JSON.stringify({ key, value })
  //           });
  //           return await response.json();
  //       } catch (error) {
  //           return console.error('Error:', error);
  //       }
  //   };

  //   Promise.all([
  //     updatePrice("22K", prices["22K"]),
  //     updatePrice("18K", prices["18K"]),
  //     updatePrice("Date", date)
  //   ])
  //   .then(() => {
  //     alert("Prices Updated successfully!");
  //     setIsAuthenticated(false);
  //     setPrices({ "22K": "", "18K": "", "BuyBack": "" });
  //     setPassword("");
  //   })
  //   .catch(error => console.error('Error:', error));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toDateString();

    const updateGist = async (updatedPrices) => {
      const gistId = process.env.GITHUB_GIST_ID; // Replace with your gist ID
      const accessToken = process.env.GITHUB_TOKEN; // Replace with your GitHub personal access token

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
        </form>
      )}
    </> 
    
  )
}

export default Admin