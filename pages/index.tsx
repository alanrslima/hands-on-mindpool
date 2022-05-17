import { Box, Heading, Container, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box
      position="fixed"
      w="100%"
      h="100%"
      bgGradient="linear(135deg, #DADADA 0%, #E99393 0%, #D8D8D8 0.01%, #D8D8D8 46.35%, #BDBDBD 100%)"
    >
      <Head>
        <title>Graypool - Smarter together</title>
        <meta name="description" content="Survey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <Heading textAlign="center" size="2xl" fontWeight="medium">
          Welcome to
          <br />
          Graypool
        </Heading>
        <Link href="/survey">
          <Button
            variant="outline"
            height="48px"
            width="300px"
            borderColor="#666666"
            borderRadius={50}
          >
            Start
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Home;
