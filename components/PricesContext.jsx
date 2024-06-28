import React, { createContext, useState, useEffect } from 'react'

const PricesContext = createContext();

export const PricesProvider = ({ children }) => {
    const [prices, setPrices] = useState({ "22K": "", "18K": "", "Date": "" });
  
    const fetchGist = async () => {
      try {
        const gistId = "13583f27f0799d24d6970e94906eb526"; // Replace with your gist ID
        const accessToken = import.meta.env.VITE_GITHUB_TOKEN;
  
        const response = await fetch(`https://api.github.com/gists/${gistId}`, {
          // headers: {
          //   Authorization: `token ${accessToken}`
          // }
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch gist');
        }
  
        const gist = await response.json();
        const content = gist.files['rates.json'].content;
        const parsedData = JSON.parse(content);
        setPrices(parsedData);
      } catch (error) {
        console.error('Error fetching gist:', error);
      }
    };
  
    useEffect(() => {
      fetchGist();
    }, []);
  
    return (
      <PricesContext.Provider value={{ prices, fetchGist }}>
        {children}
      </PricesContext.Provider>
    );
  };
  
export default PricesContext
