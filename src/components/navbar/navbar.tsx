import React, { FunctionComponent } from "react";
import { Flex, Text, Image } from "@chakra-ui/core";
import { Link } from "gatsby";

import { NavItem } from "./navitem";
import payphone from "../../assets/images/payphone.png";

const routes = [
  {
    id: "home",
    text: "Home",
  },
  {
    id: "about",
    text: "About",
  },
  {
    id: "work",
    text: "Work",
  },
  {
    id: "team",
    text: "Team",
  },
  {
    id: "contact",
    text: "Contact",
  },
];

interface NavBarComponentProps {
  activeHash: string;
  setActiveHash: (activeHash: string) => void;
}

export const NavBar: FunctionComponent<NavBarComponentProps> = ({
  activeHash,
  setActiveHash,
}) => (
  <Flex
    as="nav"
    align="center"
    p={[2, 2, 4, 4]}
    w="100vw"
    position="fixed"
    top={0}
    backgroundColor="#ffffff"
    opacity={1}
    zIndex={9999999}
  >
    <Flex flex={1} direction="row">
      <Link to="">
        <Image
          src={payphone}
          w={[10, 12, 16, 16]}
          h={[10, 12, 16, 16]}
          mx={[5, 5, 20, 20]}
        />
      </Link>
    </Flex>
    <Flex>
      {routes.map(({ id, text }) => (
        <NavItem
          key={id}
          id={id}
          text={text}
          activeHash={activeHash}
          setActiveHash={setActiveHash}
        ></NavItem>
      ))}
    </Flex>
  </Flex>
);
