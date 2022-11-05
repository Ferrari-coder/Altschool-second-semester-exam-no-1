import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DetailsContext } from "./Context";
import "../App.css";
function Data() {
  const { data } = useParams();
  const { repos } = useContext(DetailsContext);

  const repo = repos.filter((rep) => rep.name === data)[0];
  console.log(repos);

  return (
    <div className="details-overall-con">
      <div className="details-concon">
        <div className="details-container">
          <h1 className="details-header">Repository Details.</h1>
          <h4 className="details-name">Name:{data}</h4>
          <p className="details-description">Description:{repo?.description}</p>
          <p className="details-language">
            Most Used Language :{repo?.language}
          </p>
          <p className="details-size"> Size:{repo?.size}Kb</p>
          <p className="details-visibility">Visibility:{repo?.visibility}</p>
          <p className="details-date">
            Repository was created at: {repo?.created_at}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Data;
