import { ChakraProvider } from "@chakra-ui/react";
import { render, waitFor } from "@testing-library/react";
import { SurveyProps } from "../../types/survey";
import userEvent from "@testing-library/user-event";

import Survey from "./index";

const surveyMock: SurveyProps = {
  surveyId: 1,
  questions: [
    {
      id: "1",
      createdAt: "2022-05-01T21:52:51.354Z",
      title: "What do you think is your overview knowledge as a FrontEnd Dev?",
      category: {
        id: 1,
        name: "Introduction",
      },
    },
    {
      id: "2",
      createdAt: "2022-05-01T17:09:53.466Z",
      title: "How good are you working with a team?",
      category: {
        id: 1,
        name: "Behavior",
      },
    },
    {
      id: "3",
      createdAt: "2022-05-02T03:34:34.381Z",
      title: "How good you are working with fast-paced environment?",
      category: {
        id: 1,
        name: "Behavior",
      },
    },
  ],
};

describe("Survey Component", () => {
  it("Should render survey page with the first question", () => {
    const { getByText } = render(<Survey survey={surveyMock} />, {
      wrapper: ChakraProvider,
    });
    const firstQuestion = surveyMock.questions[0];
    expect(
      getByText(`${firstQuestion.id}. ${firstQuestion.category.name}`)
    ).toBeInTheDocument();
    expect(getByText(surveyMock.questions[0].title)).toBeInTheDocument();
    expect(getByText("Continue")).toBeInTheDocument();
  });

  it("Should render second question when click in continue", async () => {
    const { getByText } = render(<Survey survey={surveyMock} />, {
      wrapper: ChakraProvider,
    });
    const firstQuestion = surveyMock.questions[0];
    expect(
      getByText(`${firstQuestion.id}. ${firstQuestion.category.name}`)
    ).toBeInTheDocument();
    expect(getByText(firstQuestion.title)).toBeInTheDocument();

    const continueButton = getByText("Continue");

    userEvent.click(continueButton);

    await waitFor(() => {
      const secondQuestion = surveyMock.questions[0];
      expect(
        getByText(`${secondQuestion.id}. ${secondQuestion.category.name}`)
      ).toBeInTheDocument();
      expect(getByText(secondQuestion.title)).toBeInTheDocument();
    });
  });

  it("Should render finish botão in last question", async () => {
    const { getByText } = render(<Survey survey={surveyMock} />, {
      wrapper: ChakraProvider,
    });

    const continueButton = getByText("Continue");

    userEvent.click(continueButton);
    userEvent.click(continueButton);

    await waitFor(() => {
      const lastQuestion = surveyMock.questions[2];
      expect(
        getByText(`${lastQuestion.id}. ${lastQuestion.category.name}`)
      ).toBeInTheDocument();
      expect(getByText(lastQuestion.title)).toBeInTheDocument();
      expect(getByText("Finish")).toBeInTheDocument();
    });
  });

  it("Should appear loading when loading surveys", () => {
    const { getByText } = render(<Survey />, {
      wrapper: ChakraProvider,
    });
    expect(getByText("Loading")).toBeInTheDocument();
  });
});
