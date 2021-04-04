import React, { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Game from "./components/Game";
import Confetti from "react-confetti";

const App = () => {
  const [over, setOver] = useState(false);
  const [w, setW] = useState(window.innerWidth);
  const [h, setH] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
      setH(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener(handleResize);
  }, []);
  return (
    <Layout>
      {over && <Confetti width={w} height={h} />}
      <Game setOver={setOver} />
    </Layout>
  );
};

export default App;
