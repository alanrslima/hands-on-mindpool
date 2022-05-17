import { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { SurveyProps } from "../../types/survey";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Progress,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Rating from "../../components/Rating";

const Survey: NextPage<SurveyProps> = (survey) => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(survey.questions);

  const progress = (index * 100) / survey.questions.length;
  const question = questions.find((_, i) => i === index);

  if (!survey) {
    return <h1>Loading</h1>;
  }

  const nextQuestion = () => {
    setIndex((prevState) => prevState + 1);
  };

  const previousQuestion = () => {
    setIndex((prevState) => prevState - 1);
  };

  const handleRating = (score: number) => {
    setQuestions((prevState) =>
      prevState.map((item) => ({
        ...item,
        score: item.id === question?.id ? score : item.score,
      }))
    );
  };

  return (
    <Box position="fixed" w="100%" h="100%">
      <Progress size="sm" colorScheme="green" value={progress} />
      <Container p={30}>
        <Heading
          textTransform="uppercase"
          textColor="#04384B"
          fontSize="md"
          as="h4"
        >
          {`${question?.id}. ${question?.category.name}`}
        </Heading>
        <Text
          textColor="#666666"
          mt={5}
          mb={10}
          fontWeight="light"
          fontSize="2xl"
        >
          {question?.title}
        </Text>
        <Rating defaultScore={question?.score} onClickRating={handleRating} />
        <HStack
          as="footer"
          bottom={0}
          p={30}
          left={0}
          right={0}
          position="absolute"
        >
          <Button onClick={previousQuestion}>Previous</Button>
          <Spacer />
          <Button onClick={nextQuestion}>Continue</Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Survey;

export const getStaticProps: GetStaticProps = async () => {
  const uri = "https://demo7671310.mockable.io/api/surveys/frontend-interview";
  const response = await fetch(uri);
  const data = await response.json();

  return {
    props: data,
    revalidate: 60 * 60,
  };
};
