import React from "react";
import { Container } from "./styles";

import { ITopic } from "../../../interfaces/Section";

const Topic: React.FC<ITopic> = ({
  children,
  type,
  template,
  color,
}: ITopic) => {
  return (
    <Container color={color} className={`${template} ${type}`}>
      {children}
    </Container>
  );
};

export default Topic;
