import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Helmet } from "react-helmet-async";
let count = 1;

function Repo() {
  const [Repos, setRepos] = useState([]);

  const getRepos = async (val) => {
    const reps = await fetch(
      `https://api.github.com/users/Ferrari-coder/repos?per_page=8&page=${val}`
    );
    const data = await reps.json();
    setRepos(data);
  };

  useEffect(() => {
    getRepos(1);
  }, []);

  const decrement = () => {
    count < 2 || count--;
    getRepos(count);
  }
  const increment = () => {
      count >3 || count++;
      console.log(count);
      getRepos(count);
  }

  //how do i write an arrow function?

  return (
    <div className="repos">
      <Helmet>
        <title>Github Repositories</title>
        <meta
          name="description"
          content="Github Portofolio and Repositories."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1 className="repo-header">Repositories</h1>
      <ul className="repo-container">
        {Repos[0] &&
          Repos.map((repo, i) => (
            <Link
              to={`/repos/${repo.name}`}
              key={i}
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <li className="repo-card">
                <h4 className="repo-name">{repo.name}</h4>
                <p className="repo-description">{repo.description}</p>
                <div className="language">
                  <p className="repo-lang">{repo.language}</p>
                </div>
                <div className="other">
                  <p className="repo-other">ID:{repo.id}</p>
                  <p className="repo-other">{repo.size}Kb</p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
      <div className="buttons">
        <button onClick={decrement} className="previous">
          Previous
        </button>
        <button onClick={increment} className="next">
          Next
        </button>
      </div>
    </div>
  );
}

export default Repo;
