import clsx from "clsx";

import TalentIcon from "@/components/TalentIcon";

type Props = {
  talent: Talent;
};

export default function TalentTile({ talent }: Props) {
  const activeBorderStyle =
    "bg-gradient-icon-active shadow-glow outline-1 outline-gray-800 outline border-[#6c97c4]";
  const inactiveBorderStyle = "bg-gradient-icon-inactive border-[#4d4d4d]";
  const borderStyle = talent.isActive ? activeBorderStyle : inactiveBorderStyle;

  return (
    <div
      className={clsx(
        "z-10 w-[61px] h-[61px] p-1 border-[1px] cursor-pointer",
        borderStyle
      )}
    >
      <div className="w-[51px] h-[51px] bg-slate-800">
        <TalentIcon name={talent.name} />
      </div>
    </div>
  );
}
