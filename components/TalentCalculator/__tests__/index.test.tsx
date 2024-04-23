import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TalentCalculator from "../";

describe("TalentCalculator", () => {
  it("renders a header", () => {
    render(<TalentCalculator />);

    const header = screen.getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(
      "TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000"
    );
  });
});
