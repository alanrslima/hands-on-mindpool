import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

import Layer from "../../components/Layer";

describe("Layer Component", () => {
  it("should render a layer with a title and logo", () => {
    const { getByText, getByAltText, queryByRole } = render(
      <Layer title="Hello layer" />,
      {
        wrapper: ChakraProvider,
      }
    );
    expect(getByText("Hello layer")).toBeInTheDocument();
    expect(getByAltText("Graypool logo")).toBeInTheDocument();
    expect(queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render a layer with a title, logo and button", () => {
    const { getByText, getByAltText, getByRole } = render(
      <Layer
        title="Hello layer"
        button={{ title: "start", onClick: jest.fn(() => {}) }}
      />,
      { wrapper: ChakraProvider }
    );
    expect(getByText("Hello layer")).toBeInTheDocument();
    expect(getByAltText("Graypool logo")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });
});
