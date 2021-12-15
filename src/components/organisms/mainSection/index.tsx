import React from "react";
import { Container } from "./styles";
import home from "../../../assets/home.jpg";
import Topic from "../../atoms/topic";
import Button from "../../atoms/button";
const MainSection: React.FC = () => {
  return (
    <Container>
      <Topic template="main-section" type="title">
        Uma revolução quando os assuntos são finanças pessoais
      </Topic>
      <Topic template="main-section" type="subtitle">
        Uma revolução quando os assuntos são finanças pessoais
      </Topic>
      <Button template="main-section">Ler mais</Button>
      <img src={home} alt="first-section-img" className="first-section-img" />
    </Container>
  );
};

export default MainSection;
