import React from "react";
import Profile from "./Profile";
import Repo from "./Repo";
import ErrorBoundary from "../ErrorBoundary";

function Home() {
  return (
    <>
      <ErrorBoundary>
        <Profile />
        <Repo />
      </ErrorBoundary>
    </>
  );
}

export default Home;
