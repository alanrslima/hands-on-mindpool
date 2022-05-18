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
import { RatingHelpers } from "./helpers";

interface RatingProps {
  onClickRating?: (score: number) => void;
  defaultScore?: number;
}
const Rating = (props: RatingProps) => {
  const [score, setScore] = useState<number>();
  const indicators = RatingHelpers.getIndicators();

  useEffect(() => {
    setScore(props.defaultScore);
  }, [props.defaultScore]);

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
              size={{ base: "10", sm: "14", md: "16" }}
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
