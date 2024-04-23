import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import TalentCalculator from "../";

const TALENT_TREE_TEST_MOCK = {
  totalPointsToSpend: 6,
  totalPointsSpent: 0,
  talentPaths: [
    {
      id: "t-p-id-1",
      name: "t p 1",
      talents: [
        {
          id: "foo-bar-id-1",
          name: "stack",
          label: "test stack label",
          isActive: false,
        },
        {
          id: "foo-bar-id-2",
          name: "stamina",
          label: "Stamina test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-3",
          name: "sweet-tooth",
          label: "Sweet Tooth test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-4",
          name: "leadership",
          label: "Leadership influence test label",
          isActive: false,
        },
      ],
    },
    {
      id: "t-p-id-2",
      name: "t p 2",
      talents: [
        {
          id: "foo-bar-id-5",
          name: "water-resist",
          label: "Water Resistance test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-6",
          name: "water-damage",
          label: "Water Damage test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-7",
          name: "electric-damage",
          label: "Electric Damage test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-8",
          name: "avoid-death",
          label: "Avoid Death test label",
          isActive: false,
        },
      ],
    },
  ],
};

describe("TalentCalculator", () => {
  it("renders a header", () => {
    render(<TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />);

    const header = screen.getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();
    expect(header.textContent).toStrictEqual(
      "TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000"
    );
  });

  it("renders 2 talent path rows", () => {
    render(<TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />);

    const talentPathRows = screen.getAllByTestId("talent-path-row");

    expect(talentPathRows.length).toEqual(2);
  });

  it("renders first talent path with name 't p 1'", () => {
    render(<TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />);

    const talentPathLabels = screen.getAllByTestId("talent-path-name");

    expect(talentPathLabels[0].textContent).toEqual("t p 1");
  });

  it("renders second talent path with name 't p 2'", () => {
    render(<TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />);

    const talentPathLabels = screen.getAllByTestId("talent-path-name");

    expect(talentPathLabels[1].textContent).toEqual("t p 2");
  });

  it("renders 8 talents in total", () => {
    render(<TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />);

    const talentPathIcons = screen.getAllByTestId("talent-path-icon");

    expect(talentPathIcons.length).toEqual(8);
  });

  it("renders 4 talents per talent path", () => {
    render(<TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />);

    const talentPathRows = screen.getAllByTestId("talent-path-row");
    const firstRow = talentPathRows[0];
    const secondRow = talentPathRows[1];

    const firstRowTalents = within(firstRow).getAllByTestId("talent-path-icon");
    const secondRowTalents =
      within(secondRow).getAllByTestId("talent-path-icon");

    expect(firstRowTalents.length).toEqual(4);
    expect(secondRowTalents.length).toEqual(4);
  });

  it("renders initial 0 points spent out of 6 available", () => {
    render(<TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />);

    const talentPointsScore = screen.getByTestId("talents-to-spend");

    expect(talentPointsScore.textContent).toEqual("0 / 6");
  });
});
