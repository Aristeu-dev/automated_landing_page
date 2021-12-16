import styled from "styled-components";
export const Container = styled.nav`
  /* background: red; */
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  height: 80px;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  svg.menu-mobile {
    display: none;
  }
  img.logo-header {
    height: 80px;
  }
  div.social {
    display: flex;
    justify-content: space-between;
    width: 100px;
    background: green;
  }

  @media (max-width: 800px) {
    svg.menu-mobile {
      display: flex;
    }
    ul.wide-ul {
      display: none;
    }
    div.wide-social{
      display: none;
    }
  }
`;
