import React from "react";
import { Container } from "./styles";
import Li from "../../atoms/li";
import { IUl, ILi } from "../../../interfaces/Navbar";

const Ul: React.FC<IUl> = ({ list, className }: IUl) => {
  return (
    <Container className={className}>
      {list.map((li: ILi, i) => (
        <Li key={i} title={li.title} to={li.to}></Li>
      ))}
    </Container>
  );
};

export default Ul;
