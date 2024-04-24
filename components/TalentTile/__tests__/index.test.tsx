import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TalentTile from "../";

const TALENT_MOCK_INACTIVE = {
  id: "foo-bar-1",
  isActive: false,
  name: "stack",
  label: "Stack Damage",
  talentPath: "foo-talent-path-1",
};

const TALENT_MOCK_ACTIVE = {
  id: "foo-bar-1",
  isActive: true,
  name: "stack",
  label: "Stack Damage",
  talentPath: "foo-talent-path-1",
};

describe("TalentTile", () => {
  it("renders a inactive talent icon", () => {
    const { container } = render(
      <TalentTile
        talent={TALENT_MOCK_INACTIVE}
        onLeftClick={() => {}}
        onRightClick={() => {}}
      />
    );

    const icon = screen.getByTestId("talent-icon");
    const inactiveTile = container.querySelector(".bg-gradient-icon-inactive");

    expect(icon).toBeInTheDocument();
    expect(inactiveTile).toBeInTheDocument();
  });

  it("renders a active talent icon", () => {
    const { container } = render(
      <TalentTile
        talent={TALENT_MOCK_ACTIVE}
        onLeftClick={() => {}}
        onRightClick={() => {}}
      />
    );

    const icon = screen.getByTestId("talent-icon");
    const activeTile = container.querySelector(".bg-gradient-icon-active");

    expect(icon).toBeInTheDocument();
    expect(activeTile).toBeInTheDocument();
  });

  it("calls leftClick callback", () => {
    const onLeftClickMock = jest.fn();

    render(
      <TalentTile
        talent={TALENT_MOCK_ACTIVE}
        onLeftClick={onLeftClickMock}
        onRightClick={() => {}}
      />
    );

    fireEvent.click(screen.getByTestId("talent-tile-container"));

    expect(onLeftClickMock).toHaveBeenCalledTimes(1);
  });

  it("calls rightClick callback", () => {
    const onRightClickMock = jest.fn();

    render(
      <TalentTile
        talent={TALENT_MOCK_ACTIVE}
        onLeftClick={() => {}}
        onRightClick={onRightClickMock}
      />
    );

    fireEvent.contextMenu(screen.getByTestId("talent-tile-container"));

    expect(onRightClickMock).toHaveBeenCalledTimes(1);
  });
});
