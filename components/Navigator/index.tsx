import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

interface NavigatorProps {
  maxIndex: number;
  index: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
}
const Navigator = (props: NavigatorProps) => {
  const next = () => {
    props.onClickNext();
  };
  const previous = () => {
    props.onClickPrevious();
  };

  const minDisabled = props.index <= 0;
  const maxDisabled = props.index >= props.maxIndex - 1;

  return (
    <Box>
      <IconButton
        onClick={previous}
        colorScheme="gray"
        disabled={minDisabled}
        size="lg"
        mr={2}
        aria-label="Previous index page"
        icon={<FiChevronUp />}
      />
      <IconButton
        onClick={next}
        size="lg"
        disabled={maxDisabled}
        colorScheme="gray"
        aria-label="Next index page"
        icon={<FiChevronDown />}
      />
    </Box>
  );
};

export default Navigator;
