import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TalentCalculator from "../";

const TALENT_TREE_TEST_MOCK = {
  totalPointsToSpend: 6,
  talentPaths: [
    {
      id: "t-p-id-1",
      name: "t p 1",
      talents: [
        {
          id: "foo-bar-id-1",
          talentPath: "t-p-id-1",
          name: "stack",
          label: "test stack label",
          isActive: false,
        },
        {
          id: "foo-bar-id-2",
          talentPath: "t-p-id-1",
          name: "stamina",
          label: "Stamina test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-3",
          talentPath: "t-p-id-1",
          name: "sweet-tooth",
          label: "Sweet Tooth test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-4",
          talentPath: "t-p-id-1",
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
          talentPath: "t-p-id-2",
          name: "water-resist",
          label: "Water Resistance test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-6",
          talentPath: "t-p-id-2",
          name: "water-damage",
          label: "Water Damage test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-7",
          talentPath: "t-p-id-2",
          name: "electric-damage",
          label: "Electric Damage test label",
          isActive: false,
        },
        {
          id: "foo-bar-id-8",
          talentPath: "t-p-id-2",
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

  describe("when first active talent is clicked and first talent is active", () => {
    it("renders 1 active talents and then ignores the action", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.click(talentTiles[0]);
      fireEvent.click(talentTiles[0]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(1);
      expect(inactiveTiles.length).toEqual(7);
    });
  });

  describe("when second inactive talent is clicked but first was is inactive", () => {
    it("renders 0 active talents and ignores the action", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.click(talentTiles[1]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(0);
      expect(inactiveTiles.length).toEqual(8);
    });
  });

  describe("when first inactive talent is clicked", () => {
    it("renders 1 active talent", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.click(talentTiles[0]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(1);
      expect(inactiveTiles.length).toEqual(7);
    });

    describe("and then second inactive talent is clicked", () => {
      it("renders 2 active talents", () => {
        const { container } = render(
          <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
        );

        const talentTiles = screen.getAllByTestId("talent-tile-container");

        fireEvent.click(talentTiles[0]);
        fireEvent.click(talentTiles[1]);

        const activeTiles = container.querySelectorAll(
          ".bg-gradient-icon-active"
        );

        const inactiveTiles = container.querySelectorAll(
          ".bg-gradient-icon-inactive"
        );

        expect(activeTiles.length).toEqual(2);
        expect(inactiveTiles.length).toEqual(6);
      });

      describe("and then up to 7 inactive talent is clicked", () => {
        it("renders 6 active talents and no more than 6", () => {
          const { container } = render(
            <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
          );

          const talentTiles = screen.getAllByTestId("talent-tile-container");

          fireEvent.click(talentTiles[0]);
          fireEvent.click(talentTiles[1]);
          fireEvent.click(talentTiles[2]);
          fireEvent.click(talentTiles[3]);
          fireEvent.click(talentTiles[4]);
          fireEvent.click(talentTiles[5]);
          fireEvent.click(talentTiles[6]);

          const activeTiles = container.querySelectorAll(
            ".bg-gradient-icon-active"
          );

          const inactiveTiles = container.querySelectorAll(
            ".bg-gradient-icon-inactive"
          );

          expect(activeTiles.length).toEqual(6);
          expect(inactiveTiles.length).toEqual(2);
        });
      });
    });
  });

  describe("when first active talent is right clicked", () => {
    it("renders 0 active talent", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.click(talentTiles[0]);
      fireEvent.contextMenu(talentTiles[0]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(0);
      expect(inactiveTiles.length).toEqual(8);
    });
  });

  describe("when second active talent is right clicked", () => {
    it("renders 1 active talent", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.click(talentTiles[0]);
      fireEvent.click(talentTiles[1]);
      fireEvent.contextMenu(talentTiles[1]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(1);
      expect(inactiveTiles.length).toEqual(7);
    });
  });

  describe("when the last - 4th active talent is right clicked", () => {
    it("renders 3 active talents", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.click(talentTiles[0]);
      fireEvent.click(talentTiles[1]);
      fireEvent.click(talentTiles[2]);
      fireEvent.click(talentTiles[3]);
      fireEvent.contextMenu(talentTiles[3]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(3);
      expect(inactiveTiles.length).toEqual(5);
    });
  });

  describe("when the 3rd active talent is right clicked and 4th is active as well", () => {
    it("renders 4 active talents and ignores the action", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.click(talentTiles[0]);
      fireEvent.click(talentTiles[1]);
      fireEvent.click(talentTiles[2]);
      fireEvent.click(talentTiles[3]);
      fireEvent.contextMenu(talentTiles[2]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(4);
      expect(inactiveTiles.length).toEqual(4);
    });
  });

  describe("when second inactive talent is right clicked and second talent is already inactive", () => {
    it("renders 1 active talents and then ignores the action", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.click(talentTiles[0]);
      fireEvent.click(talentTiles[1]);
      fireEvent.contextMenu(talentTiles[1]);
      fireEvent.contextMenu(talentTiles[1]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(1);
      expect(inactiveTiles.length).toEqual(7);
    });
  });

  describe("when user have not selected points and user right clicks the talent", () => {
    it("renders 0 active talents and then ignores the action", () => {
      const { container } = render(
        <TalentCalculator talentTree={TALENT_TREE_TEST_MOCK} />
      );

      const talentTiles = screen.getAllByTestId("talent-tile-container");

      fireEvent.contextMenu(talentTiles[1]);

      const activeTiles = container.querySelectorAll(
        ".bg-gradient-icon-active"
      );

      const inactiveTiles = container.querySelectorAll(
        ".bg-gradient-icon-inactive"
      );

      expect(activeTiles.length).toEqual(0);
      expect(inactiveTiles.length).toEqual(8);
    });
  });
});
