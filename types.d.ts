type Talent = {
  id: string;
  name: string;
  label: string;
  isActive: boolean;
};

type TalentPath = {
  id: string;
  name: string;
  talents: Talent[];
};

type TalentTree = {
  totalPointsToSpend: number;
  totalPointsSpent: number;
  talentPaths: TalentPath[];
};
