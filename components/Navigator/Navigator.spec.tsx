import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

import Navigator from ".";

describe("Navigator Component", () => {
  it("Should render a navigator component", () => {
    const { getAllByRole } = render(
      <Navigator
        index={0}
        maxIndex={2}
        onClickNext={() => {}}
        onClickPrevious={() => {}}
      />,
      { wrapper: ChakraProvider }
    );
    expect(getAllByRole("button")).toHaveLength(2);
  });
});
