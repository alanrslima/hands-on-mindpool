import { Box, Button, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface LayerProps {
  title: string;
  button?: {
    title: string;
    onClick?: () => void;
  };
}
const Layer = (props: LayerProps) => {
  return (
    <Box
      position="fixed"
      w="100%"
      h="100%"
      bgGradient="linear(135deg, #DADADA 0%, #E99393 0%, #D8D8D8 0.01%, #D8D8D8 46.35%, #BDBDBD 100%)"
    >
      <Container
        display="flex"
        height="100%"
        centerContent
        justifyContent="space-around"
      >
        <Image
          src="/images/logo.png"
          height={40}
          width={160}
          alt="Graypool logo"
        />
        <Heading
          whiteSpace="pre-line"
          textAlign="center"
          size="2xl"
          fontWeight="thin"
        >
          {props.title}
        </Heading>
        <Box>
          {props.button && (
            <Button
              variant="outline"
              onClick={props.button.onClick}
              height="48px"
              width="300px"
              borderColor="#666666"
              borderRadius={50}
            >
              {props.button.title}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Layer;
