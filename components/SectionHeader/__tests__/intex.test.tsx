import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SectionHeader from "../";

describe("SectionHeader", () => {
  it("renders a header with the provided text Foo", () => {
    render(<SectionHeader text="Foo" />);

    const header = screen.getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();
    expect(header.textContent).toStrictEqual("Foo");
  });

  it("renders a header with the provided text Bar", () => {
    render(<SectionHeader text="Bar" />);

    const header = screen.getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();
    expect(header.textContent).toStrictEqual("Bar");
  });
});
