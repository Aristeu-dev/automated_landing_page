import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 700px;
  text {
    margin-bottom: 25px;
  }
  button {
    margin-top: 40px;
  }
  img.first-section-img {
    position: absolute;
    width: 100%;
    height: 700px;
    object-fit: cover;
    clip-path: polygon(0% 0%, 100% 0, 100% 80%, 50% 100%, 0 80%);
    /* opacity: -5; */
    filter: brightness(35%);
  }
`;
