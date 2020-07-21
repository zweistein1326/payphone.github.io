import React, { FunctionComponent } from "react";
import { Flex, Link, Heading, Image, Text, Box } from "@chakra-ui/core";
import payphoneApp from "../../assets/images/payphoneApp.png";

export const Sponsors: FunctionComponent = () => (
  <Flex
    id="work"
    backgroundColor="primary"
    p={[10, 10, 20, 20]}
    direction="column"
    align="center"
  >
    <Heading color="text" as="h1" size="2xl">
      How it works
    </Heading>
    <Flex maxW="100vw" wrap="wrap" align="center" justify="space-around" my={5}>
      <Box width="40vw">
        <Text color="black">
          PayPhone uses blockchain powered smart-contracts to
        </Text>
      </Box>
      <Box>
        <Image src={payphoneApp} height="60vh" />
      </Box>
    </Flex>
  </Flex>
);
