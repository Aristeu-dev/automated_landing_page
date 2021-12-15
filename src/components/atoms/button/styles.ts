import styled from "styled-components";
import { shade } from "polished";
export const Container = styled.button`
  background: #2091f9;
  height: 50px;
  border-radius: 50px;
  z-index: 1;
  border: 0;
  color: #ffffff;
  width: 200px;
  font-weight: 400;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 20px;

  &:hover {
    background: ${shade(0.2, "#2091F9")};
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
