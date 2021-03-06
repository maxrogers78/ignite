// React
import React from "react";
// Styled Components
import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
// Actions
import { loadDetail } from "../actions/detailAction";
// Router
import { Link } from "react-router-dom";
// util
import { smallImage } from "../util";
// animations
import { popUp } from "../animations";

const Game = ({ id, name, released, image }) => {
  const stringPathId = id.toString();

  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
