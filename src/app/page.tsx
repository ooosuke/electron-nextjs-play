"use client";

import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    throw new Error("Error!");
  }, []);
  return (
    <main>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box.
      </Box>
      <Button
        colorScheme="teal"
      >
        Error!
      </Button>
    </main>
  );
}
