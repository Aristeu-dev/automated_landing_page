import styled from "styled-components";
export const Container = styled.div`
  img.first-section-img {
    position: absolute;
    width: 100%;
    height: 700px;
    object-fit: cover;
    clip-path: polygon(0% 20%, 0 0, 60% 0%, 100% 0, 100% 78%, 52% 100%, 0 75%);
    offset-distance: 100%;
  }
`;
