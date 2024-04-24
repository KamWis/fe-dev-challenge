import TalentTile from "@/components/TalentTile";
import TalentSeparator from "@/components/TalentSeparator";

type Props = {
  talents: Talent[];
  name: string;
  onTalentAdd: (talentId: string, talentPathId: string) => void;
  onTalentRemove: (talentId: string, talentPathId: string) => void;
};

export default function TalentPath({
  talents,
  name,
  onTalentAdd,
  onTalentRemove,
}: Props) {
  return (
    <div
      data-testid="talent-path-row"
      className="flex mt-[34px] md:mt-[54px] items-center flex-wrap md:flex-nowrap md:w-auto w-1/2 justify-center"
    >
      <span
        data-testid="talent-path-name"
        className="uppercase font-bold w-[151px] mb-4 md:mb-0 text-center md:text-start"
      >
        {name}
      </span>
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap w-[61px] md:w-auto">
        {talents.map((talent, index) => {
          const isLast = index + 1 === talents.length;
          return (
            <div
              key={talent.id}
              data-testid="talent-path-icon"
              className="flex items-center justify-center flex-wrap md:flex-nowrap"
            >
              <TalentTile
                talent={talent}
                onLeftClick={(e) => onTalentAdd(talent.id, talent.talentPath)}
                onRightClick={(e) => {
                  e.preventDefault();
                  onTalentRemove(talent.id, talent.talentPath);
                }}
              />
              {!isLast ? <TalentSeparator active={talent.isActive} /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
