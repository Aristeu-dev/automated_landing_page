import React from "react";
import Header from "../../components/organisms/header";
import { Container } from "./styles";
import MainSection from "../../components/organisms/mainSection";
const Home: React.FC = () => {

  return (
    <Container>
      <Header></Header>
      <MainSection></MainSection>
    </Container>
  );
};

export default Home;
