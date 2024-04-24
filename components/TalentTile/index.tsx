import clsx from "clsx";
import { MouseEventHandler } from "react";

import TalentIcon from "@/components/TalentIcon";

type Props = {
  talent: Talent;
  onLeftClick: MouseEventHandler<HTMLDivElement>;
  onRightClick: MouseEventHandler<HTMLDivElement>;
};

export default function TalentTile({
  talent,
  onLeftClick,
  onRightClick,
}: Props) {
  const activeBorderStyle =
    "bg-gradient-icon-active shadow-glow outline-1 outline-gray-800 outline border-[#6c97c4]";
  const inactiveBorderStyle = "bg-gradient-icon-inactive border-[#4d4d4d]";
  const borderStyle = talent.isActive ? activeBorderStyle : inactiveBorderStyle;

  return (
    <div
      data-testid="talent-tile-container"
      className={clsx(
        "z-10 w-[61px] h-[61px] p-1 border-[1px] cursor-pointer",
        borderStyle
      )}
      onClick={onLeftClick}
      onContextMenu={onRightClick}
    >
      <div className="w-[51px] h-[51px] bg-slate-800">
        <TalentIcon
          data-testid="talent-icon"
          name={talent.name}
          active={talent.isActive}
        />
      </div>
    </div>
  );
}
