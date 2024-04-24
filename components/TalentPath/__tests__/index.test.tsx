import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TalentPath from "..";

const TALENTS_MOCK = [
  {
    id: "foo-bar-1",
    isActive: true,
    name: "stack",
    label: "Stack Damage",
    talentPath: "foo-talent-path-1",
  },
  {
    id: "foo-bar-2",
    isActive: false,
    name: "stamina",
    label: "Stamina buff",
    talentPath: "foo-talent-path-1",
  },
];

describe("TalentPath", () => {
  it("renders correct talent path name", () => {
    render(
      <TalentPath
        talents={TALENTS_MOCK}
        name="talent path 1"
        onTalentAdd={() => {}}
        onTalentRemove={() => {}}
      />
    );

    const pathNameNode = screen.getByTestId("talent-path-name");

    expect(pathNameNode.textContent).toStrictEqual("talent path 1");
  });

  it("calls onTalentAdd callback", () => {
    const onTalentAddMock = jest.fn();

    render(
      <TalentPath
        talents={TALENTS_MOCK}
        name="talent path 1"
        onTalentAdd={onTalentAddMock}
        onTalentRemove={() => {}}
      />
    );

    fireEvent.click(screen.getAllByTestId("talent-path-icon")[0].firstChild!);

    expect(onTalentAddMock).toHaveBeenCalledTimes(1);
  });

  it("calls onTalentRemove callback", () => {
    const onTalentRemoveMock = jest.fn();

    render(
      <TalentPath
        talents={TALENTS_MOCK}
        name="talent path 1"
        onTalentAdd={() => {}}
        onTalentRemove={onTalentRemoveMock}
      />
    );

    fireEvent.contextMenu(
      screen.getAllByTestId("talent-path-icon")[0].firstChild!
    );

    expect(onTalentRemoveMock).toHaveBeenCalledTimes(1);
  });
});
