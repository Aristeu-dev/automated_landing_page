import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { IButton } from "../../../interfaces/Section";

const Button: React.FC<IButton> = ({
  children,
  type,
  template,
  ...rest
}: IButton) => (
  <Container className={template} type="button" {...rest}>
    {children}
  </Container>
);
export default Button;
