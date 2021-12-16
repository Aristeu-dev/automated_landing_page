import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    width: 40%;
    flex-direction: column;
    /* background: blue; */
  }
  height: 700px;
  text {
    margin-bottom: 25px;
  }
  button {
    margin-top: 40px;
  }
  img.secundary-section-img {
    /* position: absolute; */
    width: 40%;
    object-fit: cover;
    /* height: 600px; */
  }
  @media (max-width: 1200px) {
    div {
      width: 100%;
      padding-left: 10%;
      padding-right: 10%;
      align-items: center;
      text-align: center;
    }
    flex-direction: column;
    img.secundary-section-img {
      /* position: absolute; */
      width: 60% !important;
      
      /* height: 600px; */
    }
  }
`;
