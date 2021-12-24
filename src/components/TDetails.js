import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const TDetails = () => {
  const params = useParams();
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <h1>Tutorials Details {params.title}</h1>
      <button onClick={handleClick}>Go Home</button>
      <button onClick={() => navigate(-2)}>Go 2 pages Back</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
    </div>
  );
};

export default TDetails;
