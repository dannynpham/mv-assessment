import { render, screen } from "../test-utils";
import PageTitle from "Components/PageTitle";

describe("PageTitle", () => {
  it("should render the title", async () => {
    render(<PageTitle>Test</PageTitle>);
    const heading = screen.getByText(
      /Test/i
    );

    expect(heading).toBeInTheDocument();
  });
});