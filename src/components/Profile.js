import React, { useEffect, useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet-async";

function Profile() {
  const [profile, setProfile] = useState([]);
  // Fetching Profile Data
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const api = await fetch("https://api.github.com/users/Ferrari-coder", {
      method: "get",
    });
    const data = await api.json();
    setProfile(data);
  };
  console.log(profile);
  return (
    <div className="profile-container">
      <Helmet>
        <title>Github Portofolio</title>
        <meta
          name="description"
          content="Github Portofolio and Repositories."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <img src={profile.avatar_url} alt="profile" className="avatar" />
      <h1 className="profile-name">{profile.name}</h1>
      <h3 className="username">@{profile.login}</h3>
      <p className="bio">{profile.bio}</p>
      <section className="section">
        <div className="stat" id="repos">
          <p className="profile-figures" id="repo-fig">{profile.public_repos}</p>
          <h3 className="profile-details"> Repositories</h3>
        </div>
        <div className="stat">
          <p className="profile-figures">{profile.followers}</p>
          <h3 className="profile-details"> Followers</h3>
        </div>
        <div className="stat">
          <p className="profile-figures">{profile.following}</p>
          <h3 className="profile-details">Following</h3>
        </div>
      </section>
    </div>
  );
}

export default Profile;
