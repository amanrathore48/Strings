import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import {
  LinkCon,
  LogoCon,
  LogoName,
  MenuBtnCon,
  MyNavLink,
  SidebarCon,
} from "./Styles/Sidebar";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <LinkCon>
    {links.map((item) => (
      <MyNavLink
        key={item.name}
        to={item.to}
        onClick={() => handleClick && handleClick()}
      >
        <item.icon />
        {item.name}
      </MyNavLink>
    ))}
  </LinkCon>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SidebarCon isOpen={isOpen}>
        <LogoCon>
          <LogoName>Strings</LogoName>
        </LogoCon>
        <NavLinks />
      </SidebarCon>
      <MenuBtnCon>
        {!isOpen ? (
          <HiOutlineMenu onClick={() => setIsOpen(true)} />
        ) : (
          <RiCloseLine onClick={() => setIsOpen(false)} />
        )}
      </MenuBtnCon>
    </>
  );
};

export default Sidebar;
