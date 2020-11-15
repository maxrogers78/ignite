import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
