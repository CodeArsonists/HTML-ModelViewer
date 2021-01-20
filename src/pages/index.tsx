import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";

const Index = () => (
  <Flex
    flexDir="column"
    align="center"
    justify="center"
    height="100vh"
    w="100vw"
  >
    <Head>
      <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
      ></script>
    </Head>
    <Heading>Model Viewer Concept</Heading>
    <Box
      as={"model-viewer" as React.ElementType<any>}
      style={{
        height: "200px",
        width: "200px",
      }}
      data-name="coke"
      src="./models/nigger.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="auto"
      camera-controls
      poster=""
    />
  </Flex>
);

export default Index;
