import React from "react";
import { Container } from "./styles";
import { ILi } from "../../../interfaces/Navbar";

const Li: React.FC<ILi> = ({ title, to }: ILi) => {
  return (
    <Container>
      <a href={to}>{title}</a>
    </Container>
  );
};

export default Li;
