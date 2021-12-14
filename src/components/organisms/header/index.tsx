import React, { useState } from "react";
import { Container } from "./styles";
import Ul from "../../molecules/ul";
import { listHeader } from "../../../Data/moker";
import logo from "../../../assets/logo.svg";
import { GrTwitter } from "react-icons/gr";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import SideHeader from "../sideHeader";
const Header: React.FC = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  return (
    <Container>
      <img src={logo} alt="logo" className="logo-header" />

      <Ul className="wide-ul" list={listHeader}></Ul>

      <div className="wide-social">
        <GrTwitter size={28}></GrTwitter>
        <AiFillFacebook size={28}></AiFillFacebook>
        <AiFillLinkedin size={28}></AiFillLinkedin>
      </div>
      <BiMenuAltRight
        className="menu-mobile"
        onClick={() => {
          setShowMenuMobile(!showMenuMobile);
        }}
        size={28}
      ></BiMenuAltRight>
      {showMenuMobile ? <SideHeader></SideHeader> : <></>}
    </Container>
  );
};

export default Header;
