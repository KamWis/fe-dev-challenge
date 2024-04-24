"use client";

import Image from "next/image";
import { useReducer } from "react";

import SectionHeader from "@/components/SectionHeader";
import TalentPath from "@/components/TalentPath";

type Props = {
  talentTree: TalentTree;
};

type Action = {
  type: "activated" | "deactivated";
  talentId: string;
  talentPathId: string;
};

type State = {
  talentPaths: Record<string, TalentPath>;
  pointsSpent: number;
  pointsToSpend: number;
};

const countInitialTotalSpent = (talentPaths: TalentPath[]) => {
  return talentPaths
    .map(
      (talentPath) =>
        talentPath.talents.filter((talent) => talent.isActive).length
    )
    .reduce((acc, number) => acc + number, 0);
};

const mapToDictionaryById = (talentPaths: TalentPath[]) => {
  return talentPaths.reduce((acc, talentPath) => {
    acc[talentPath.id] = talentPath;

    return acc;
  }, {} as Record<string, TalentPath>);
};

const getCanSelectTalent = (talents: Talent[], action: Action) => {
  return talents.some((talent, index) => {
    const matchingTalent = talent.id === action.talentId;

    if (!matchingTalent) {
      return false;
    }

    if (talent.isActive) {
      return false;
    }

    if (index === 0) {
      return true;
    }

    const isPreviousTalentActive = talents[index - 1].isActive;

    if (isPreviousTalentActive) {
      return true;
    }

    return false;
  });
};

const getCanDeselectTalent = (talents: Talent[], action: Action) => {
  return talents.some((talent, index) => {
    const matchingTalent = talent.id === action.talentId;

    if (!matchingTalent) {
      return false;
    }

    if (!talent.isActive) {
      return false;
    }

    const nextTalent = talents[index + 1];
    const previousTalent = talents[index - 1];

    if (index === 0 && !nextTalent.isActive) {
      return true;
    }

    if (index !== 0 && previousTalent.isActive && !nextTalent) {
      return true;
    }

    if (index !== 0 && previousTalent.isActive && !nextTalent.isActive) {
      return true;
    }

    return false;
  });
};

const updateTalent = (talents: Talent[], action: Action, isActive: boolean) =>
  talents.map((talent) => {
    if (talent.id !== action.talentId) {
      return talent;
    }

    return { ...talent, isActive };
  });

const talentsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "activated": {
      if (state.pointsSpent === state.pointsToSpend) {
        return state;
      }

      const talentPath = state.talentPaths[action.talentPathId];
      const canSelectTalent = getCanSelectTalent(talentPath.talents, action);

      if (!canSelectTalent) {
        return state;
      }

      return {
        ...state,
        talentPaths: {
          ...state.talentPaths,
          [action.talentPathId]: {
            ...talentPath,
            talents: [...updateTalent(talentPath.talents, action, true)],
          },
        },
        pointsSpent: state.pointsSpent + 1,
      };
    }

    case "deactivated": {
      if (state.pointsSpent === 0) {
        return state;
      }

      const talentPath = state.talentPaths[action.talentPathId];
      const canSelectTalent = getCanDeselectTalent(talentPath.talents, action);

      if (!canSelectTalent) {
        return state;
      }

      return {
        ...state,
        talentPaths: {
          ...state.talentPaths,
          [action.talentPathId]: {
            ...talentPath,
            talents: [...updateTalent(talentPath.talents, action, false)],
          },
        },
        pointsSpent: state.pointsSpent - 1,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default function TalentCalculator({ talentTree }: Props) {
  const initialState = {
    pointsSpent: countInitialTotalSpent(talentTree.talentPaths),
    talentPaths: mapToDictionaryById(talentTree.talentPaths),
    pointsToSpend: talentTree.totalPointsToSpend,
  };
  const [talentPathsState, dispatch] = useReducer(talentsReducer, initialState);

  const onTalentAdd = (talentId: string, talentPathId: string) => {
    dispatch({
      type: "activated",
      talentId,
      talentPathId,
    });

    // Perform API Call with un update - this function then becomes ASYNC. We do optimistic update here, since we update state first.
  };

  const onTalentRemove = (talentId: string, talentPathId: string) => {
    dispatch({
      type: "deactivated",
      talentId,
      talentPathId,
    });

    // Perform API Call with un update - this function then becomes ASYNC. We do optimistic update here, since we update state first.
  };

  return (
    <div className="lg:w-[1104px] w-full lg:h-[415px] h-screen relative overflow-hidden">
      <div className="z-0 relative w-full h-full">
        <Image
          src="/talent-calc-bg.png"
          alt="Talent calculator background"
          className="object-cover"
          fill
          quality={100}
        />
      </div>
      <div className="z-10 absolute w-full top-0 p-5 overflow-y-scroll md:overflow-auto h-full md:h-auto">
        <SectionHeader text="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000" />
        <div className="mt-8 flex md:justify-between justify-center items-center flex-wrap-reverse">
          <div className="flex md:block">
            {Object.keys(talentPathsState.talentPaths).map((key) => {
              const talentPath = talentPathsState.talentPaths[key];

              return (
                <TalentPath
                  key={talentPath.id}
                  talents={talentPath.talents}
                  name={talentPath.name}
                  onTalentAdd={onTalentAdd}
                  onTalentRemove={onTalentRemove}
                />
              );
            })}
          </div>
          <div className="w-[196px] bg-zinc-950 bg-opacity-50  md:mr-12 text-center md:mt-6 pt-5 pb-8 border-2 border-zinc-900 text-[1.6rem]/5">
            <div data-testid="talents-to-spend" className="text-white">
              {talentPathsState.pointsSpent} / {talentTree.totalPointsToSpend}
            </div>
            <div className="text-gray-700 text-[1.6rem] mt-2">Points Spent</div>
          </div>
        </div>
      </div>
    </div>
  );
}
