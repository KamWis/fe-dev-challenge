"use client";

import Image from "next/image";
import { useState } from "react";

import SectionHeader from "@/components/SectionHeader";
import TalentPath from "@/components/TalentPath";

type Props = {
  talentTree: TalentTree;
};

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
              return <TalentPath key={talentPath.id} talentPath={talentPath} />;
            })}
          </div>
          <div className="w-[196px] bg-zinc-950 bg-opacity-50  mr-12 text-center  mt-6 pt-5 pb-8 border-2 border-zinc-900 text-[1.6rem]/5">
            <div data-testid="talents-to-spend" className="text-white">
              {pointsSent} / {talentTree.totalPointsToSpend}
            </div>
            <div className="text-gray-700 text-[1.6rem] mt-2">Points Spent</div>
          </div>
        </div>
      </div>
    </div>
  );
}
