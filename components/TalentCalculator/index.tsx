"use client";

import Image from "next/image";
import { useState } from "react";

import SectionHeader from "@/components/SectionHeader";
import TalentTile from "@/components/TalentTile";

type Props = {
  talentTree: TalentTree;
};

const TalentSeparator = () => (
  <div className="w-[109px] h-[16px] bg-gray-titan border-y-2 border-y-zinc-600 border-opacity-40" />
);

export default function TalentCalculator({ talentTree }: Props) {
  const [pointsSent, setPointsSpent] = useState(talentTree.totalPointsSpent);
  return (
    <div className="lg:w-[1104px] w-full lg:h-[415px] h-auto relative">
      <div className="z-0 relative w-full h-full">
        <Image
          src="/talent-calc-bg.png"
          alt="Talent calculator background"
          className="object-cover"
          fill
          quality={100}
        />
      </div>
      <div className="z-10 absolute w-full top-0 p-5">
        <SectionHeader text="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000" />
        <div className="mt-8 flex justify-between items-center">
          <div>
            {talentTree.talentPaths.map((talentPath) => {
              return (
                <div
                  key={talentPath.id}
                  data-testid="talent-path-row"
                  className="flex mt-[54px] items-center"
                >
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
            })}
          </div>
          <div data-testid="talents-to-spend">
            {pointsSent} / {talentTree.totalPointsToSpend}
          </div>
        </div>
      </div>
    </div>
  );
}
