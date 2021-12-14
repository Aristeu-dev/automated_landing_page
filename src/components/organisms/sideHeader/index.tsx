import React from "react";
import { Container } from "./styles";
import Ul from "../../molecules/ul";
import { listHeader } from "../../../Data/moker";
import logo from "../../../assets/logo.svg";
import { GrTwitter } from "react-icons/gr";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
const SideHeader: React.FC = () => {
  return (
    <Container>
      <Ul list={listHeader}></Ul>

      <div className="social">
        <GrTwitter size={28}></GrTwitter>
        <AiFillFacebook size={28}></AiFillFacebook>
        <AiFillLinkedin size={28}></AiFillLinkedin>
      </div>
    </Container>
  );
};

export default SideHeader;
