import React from "react";
import { Container } from "./styles";
import home from "../../../assets/home.jpg";
import Topic from "../../atoms/topic";
import Button from "../../atoms/button";
import { IMainSection } from "../../../interfaces/Section";

const MainSection: React.FC<IMainSection> = ({
  title,
  subTitle,
  textButton,
  img,
}: IMainSection) => {
  return (
    <Container>
      <Topic template="main-section" type="title">
        {title}
      </Topic>
      <Topic template="main-section" type="subtitle">
        {subTitle}
      </Topic>
      <Button template="main-section">{textButton}</Button>
      <img src={img} alt="first-section-img" className="first-section-img" />
    </Container>
  );
};

export default MainSection;
