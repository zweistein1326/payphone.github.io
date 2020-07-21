import React, { FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/core";

import {
  Home,
  Layout,
  Features,
  Sponsors,
  Team,
  Contact,
  Footer,
} from "../components";

const IndexPage: FunctionComponent<> = () => {
  return (
    <Layout>
      <Home />
      <Features />
      <Sponsors />
      <Team />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
