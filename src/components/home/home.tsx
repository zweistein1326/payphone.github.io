import React, { FunctionComponent } from "react";
import { Flex, Heading, Image, Text, Box } from "@chakra-ui/core";
import payphone from "../../assets/images/payphone.png";
import { Social } from "./social";
import "./home.css";

export const Home: FunctionComponent = () => (
  <Flex
    id="home"
    h="100vh"
    align="center"
    justify="space-around"
    textAlign="center"
    direction="row"
    backgroundColor="#ffffff"
  >
    <Box width="20vw">
      <Heading
        color="#000000"
        as="h3"
        size="xl"
        fontSize={[45, 75]}
        display="flex"
      >
        Digitize your Future
      </Heading>
    </Box>
    <Box>
      <Image src={payphone}></Image>
    </Box>
  </Flex>
);
