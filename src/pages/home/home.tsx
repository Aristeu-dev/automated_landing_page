import React from "react";
import Header from "../../components/organisms/header";
import { Container } from "./styles";
import home from "../../assets/home.jpg";

const Home: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <img src={home} alt="first-section-img" className="first-section-img" />
    </Container>
  );
};

export default Home;
