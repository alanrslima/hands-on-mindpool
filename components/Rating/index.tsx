import {
  Box,
  Center,
  Flex,
  Circle,
  Spacer,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface RatingProps {
  onClickRating?: (score: number) => void;
  defaultScore?: number;
}
const Rating = (props: RatingProps) => {
  const [score, setScore] = useState<number>();

  useEffect(() => {
    setScore(props.defaultScore);
  }, [props.defaultScore]);

  const indicators = [
    { color: "#4F4F4F", score: 0 },
    { color: "#828282", score: 1 },
    { color: "#BDBDBD", score: 2 },
    { color: "#DBDBDB", score: 3 },
    { color: "#BDBDBD", score: 4 },
    { color: "#828282", score: 5 },
    { color: "#4F4F4F", score: 6 },
  ];

  const handleScore = (value: number) => {
    setScore(value);
    props?.onClickRating && props.onClickRating(value);
  };

  return (
    <>
      <SimpleGrid columns={indicators.length} spacing={2}>
        {indicators.map((item, index) => (
          <Center key={index}>
            <Circle
              as="button"
              onClick={() => handleScore(item.score)}
              bg={item.color}
              borderWidth={score === item.score ? 5 : 1}
              borderColor={score === item.score ? "green" : "#828282"}
              _hover={{ opacity: 0.5 }}
              size={{ base: "12", md: "16" }}
            />
          </Center>
        ))}
      </SimpleGrid>
      <Flex mt={2}>
        <Box>
          <Text fontSize="sm" fontWeight="bold">
            Very bad
          </Text>
        </Box>
        <Spacer />

        <Box>
          <Text fontWeight="bold">Very good</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Rating;
