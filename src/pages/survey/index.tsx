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
import Navigator from "../../components/Navigator";
import { useRouter } from "next/router";
import { QuestionProps } from "../../types/question";
import { SurveyServices } from "../../services/survey.services";

interface SurveyPageProps {
  survey?: SurveyProps;
}

const Survey: NextPage<SurveyPageProps> = ({ survey }) => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState<QuestionProps[]>(
    survey?.questions || []
  );

  const progress = (index * 100) / questions.length;
  const router = useRouter();
  const question = questions.find((_, i) => i === index);

  if (!survey) {
    return <h1>Loading</h1>;
  }

  const lastQuestion = () => {
    return index >= questions.length - 1;
  };

  const onClickContinueButton = () => {
    if (lastQuestion()) {
      router.push("/survey/concluded", undefined, { shallow: true });
    } else {
      nextQuestion();
    }
  };

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
    <Box bg="#FAFAFA" position="fixed" w="100%" h="100%">
      <Progress size="sm" colorScheme="green" value={progress} />
      <Container position="relative" h="100%" p={30}>
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
          mb={{ base: 10, md: 20 }}
          fontWeight="light"
          fontSize={{ base: "2xl", md: "4xl" }}
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
          <Navigator
            onClickNext={nextQuestion}
            onClickPrevious={previousQuestion}
            index={index}
            maxIndex={questions.length}
          />
          <Spacer />
          <Button
            bgColor="#BDBDBD"
            height="48px"
            textColor="#FFF"
            minWidth={{ base: "143px", sm: "230px" }}
            boxShadow="lg"
            borderRadius={50}
            onClick={onClickContinueButton}
          >
            {lastQuestion() ? "Finish" : "Continue"}
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Survey;

export const getStaticProps: GetStaticProps = async () => {
  const data = await SurveyServices.get();
  return {
    props: { survey: data },
    revalidate: 60 * 60,
  };
};
