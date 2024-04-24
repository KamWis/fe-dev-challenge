type Talent = {
  id: string;
  talentPath: string;
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
  talentPaths: TalentPath[];
};
