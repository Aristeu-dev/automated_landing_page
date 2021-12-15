import { ButtonHTMLAttributes } from "react";

export interface ITopic {
  children: string;
  type: "title" | "subtitle" | "description";
  template: "main-section" | "secundary-section";
  fontSize?: number;
  color?: string;
  fontWeight?: number;
}
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export interface IButton extends ButtonProps {
  template: "main-section" | "secundary-section";
}
