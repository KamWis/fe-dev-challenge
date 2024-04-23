import clsx from "clsx";

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
      className={clsx("z-10 w-[64px] h-[64px] p-1 border-[1px]", borderStyle)}
    >
      <div className="w-[54px] h-[54px] bg-slate-800">
        {/* {talent.name} */}
      </div>
    </div>
  );
}
