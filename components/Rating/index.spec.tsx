import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

import Rating from ".";

describe("Rating Component", () => {
  it("Should render a default rating component", () => {
    const { getAllByRole } = render(<Rating />, { wrapper: ChakraProvider });
    const defaultIndicatorsLength = 7;
    expect(getAllByRole("button")).toHaveLength(defaultIndicatorsLength);
  });

  it("Should render a rating component with de default score", () => {
    const { getAllByRole } = render(<Rating defaultScore={0} />, {
      wrapper: ChakraProvider,
    });
    const defaultIndicatorsLength = 7;
    // expect(getAllByRole("button")).tohave;
  });
});
