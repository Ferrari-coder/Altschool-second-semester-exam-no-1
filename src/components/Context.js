import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const DetailsContext = createContext([]);
const DetailsProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    const api = await fetch("https://api.github.com/users/Ferrari-coder/repos", {
      method: "get",
    });
    const data = await api.json();
    setRepos(data);
  };
  console.log(repos);
  return (
    <DetailsContext.Provider value={{ repos }}>
      {children}
    </DetailsContext.Provider>
  );
};
export default DetailsProvider;
