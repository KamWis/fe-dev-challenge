import TalentTile from "@/components/TalentTile";

type Props = {
  talentPath: TalentPath;
};

const TalentSeparator = () => (
  <div className="w-[109px] h-[16px] bg-gray-titan border-y-2 border-y-zinc-600 border-opacity-40" />
);

export default function TalentPath({ talentPath }: Props) {
  return (
    <div data-testid="talent-path-row" className="flex mt-[54px] items-center">
      <span
        data-testid="talent-path-name"
        className="uppercase font-bold w-[151px]"
      >
        {talentPath.name}
      </span>
      <div className="flex items-center justify-center">
        {talentPath.talents.map((talent, index) => {
          const isFirst = index === 0;
          return (
            <div
              key={talent.id}
              data-testid="talent-path-icon"
              className="flex items-center"
            >
              {!isFirst ? <TalentSeparator /> : null}
              <TalentTile talent={talent} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
