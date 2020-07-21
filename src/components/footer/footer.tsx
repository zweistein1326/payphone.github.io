import React, { FunctionComponent } from "react";
import { Flex, Text, Link, Image } from "@chakra-ui/core";
import payphone from "../../assets/images/payphone.png";

export const Footer: FunctionComponent = () => (
  <Flex
    direction="column"
    backgroundColor="text"
    justify="center"
    align="center"
    textAlign="center"
    p={[5, 10, 10, 10]}
  >
    <Image src={payphone} w={[10, 12, 16, 20]} h={[10, 12, 16, 20]} mb={5} />
    <Text color="primary">
      All rights reserved | Developed by&nbsp;
      <Link href="https://sidagarwal.netlify.app">PayPhone</Link>
    </Text>
  </Flex>
);
