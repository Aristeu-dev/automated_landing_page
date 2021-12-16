import React from "react";
import { Container } from "./styles";
import home from "../../../assets/home.jpg";
import Topic from "../../atoms/topic";
import Button from "../../atoms/button";
import { ISecundarySection } from "../../../interfaces/Section";

const SecundarySection: React.FC<ISecundarySection> = ({
  title,
  subTitle,
  textButton,
  img,
}: ISecundarySection) => {
  return (
    <Container>
      <div>
        <Topic template="secundary-section" type="title">
          {title}
        </Topic>
        <Topic template="secundary-section" type="subtitle">
          {subTitle}
        </Topic>
        <Button template="secundary-section">{textButton}</Button>
      </div>
      <img src={img} alt="secundary-section-img" className="secundary-section-img" />
    </Container>
  );
};

export default SecundarySection;
