import { GetStaticProps, NextPage } from "next";
import React from "react";
import { SurveyProps } from "../../types/survey";
import { Box, Progress } from "@chakra-ui/react";

const Survey: NextPage<SurveyProps> = (props) => {
  console.log(props);

  return (
    <Box>
      <Progress colorScheme="green" value={80} />
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
