import React from "react";
import { Link } from 'react-router-dom';
import "./App.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <div>
        <h1 className="error">Error</h1>
        <h2 className="not-found">Oops,Page not Found!</h2>
          </div>
          <Link to="/">
              <button className="error-button">Back to Home Page</button>
          </Link>
    </div>
  );
}

export default ErrorPage;
