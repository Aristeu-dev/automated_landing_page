import styled from "styled-components";

export const Container = styled.text`
  &.main-section {
    &.title {
      color: ${(props) => (props.color ? props.color : "#FFFF")};
      margin-left: auto;
      margin-right: auto;
      z-index: 1;
      font-weight: 900;
      font-size: 50px;
      width: 670px;
      text-align: center;
    }
    &.subtitle {
      color: ${(props) => (props.color ? props.color : "#FFFF")};
      margin-left: auto;
      margin-right: auto;
      z-index: 1;
      font-weight: 300;
      font-size: 25px;
      width: 670px;
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    &.main-section {
      &.title {
        font-size: 40px;
        width: 400px;
      }
      &.subtitle {
        font-size: 20px;
        width: 500px;
      }
    }
  }
  @media (max-width: 500px) {
    &.main-section {
      &.title {
        font-size: 30px;
        width: 300px;
        font-weight: 600;
      }
      &.subtitle {
        font-size: 15px;
        width: 400px;
      }
    }
  }
  @media (max-width: 400px) {
    &.main-section {
      &.title {
        font-size: 25px;
        width: 250px;
        font-weight: 600;
      }
      &.subtitle {
        font-size: 20px;
        width: 290px;
      }
    }
  }
`;
