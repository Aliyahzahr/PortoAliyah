import React from "react";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Blog from "../components/Blog";
import Thanks from "../components/Thanks";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Jumbotron />
      <About />
      <Blog />
      <Thanks />
      </Layout>
  );
};

export default HomePage;
