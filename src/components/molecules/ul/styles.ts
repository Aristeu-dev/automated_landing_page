import styled from "styled-components";
export const Container = styled.ul`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
