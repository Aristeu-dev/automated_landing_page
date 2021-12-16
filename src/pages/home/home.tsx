import React from "react";
import Header from "../../components/organisms/header";
import { Container } from "./styles";
import MainSection from "../../components/organisms/mainSection";
import SecundarySection from "../../components/organisms/secundarySection";
import { mainSection, secundarySection } from "../../Data/date";
const Home: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <MainSection
        title={mainSection.title}
        subTitle={mainSection.subTitle}
        textButton={mainSection.textButton}
        img={mainSection.img}
      ></MainSection>
      <SecundarySection
        title={secundarySection.title}
        subTitle={secundarySection.subTitle}
        textButton={secundarySection.textButton}
        img={secundarySection.img}
      ></SecundarySection>
    </Container>
  );
};

export default Home;
