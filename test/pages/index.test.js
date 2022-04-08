import { render, screen } from "../test-utils";
import HomePage from "Pages/index";
import ballots from "Mocks/ballots";
import { waitFor } from "@testing-library/react";

beforeEach(() => {
  fetch.resetMocks();
});

describe("HomePage", () => {
  it("should render the heading", async () => {
    fetch.mockResponseOnce(JSON.stringify(ballots));

    render(<HomePage />);
    const heading = await waitFor(() => screen.getByText(
      /MOVIE AWARDS 2021/i
    ));

    expect(heading).toBeInTheDocument();
  });
});