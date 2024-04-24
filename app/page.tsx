import TalentCalculator from "@/components/TalentCalculator";

const TALENT_TREE_DATA_MOCK = {
  totalPointsToSpend: 6,
  talentPaths: [
    {
      id: "hf498hgv803ujg",
      name: "talent path 1",
      talents: [
        {
          id: "joup1vjj1-4um",
          talentPath: "hf498hgv803ujg",
          name: "stack",
          label: "Stack Damage",
          isActive: false,
        },
        {
          id: "lh14v8hv1no81",
          talentPath: "hf498hgv803ujg",
          name: "stamina",
          label: "Stamina",
          isActive: false,
        },
        {
          id: "jv8nj1n9j3190",
          talentPath: "hf498hgv803ujg",
          name: "sweet-tooth",
          label: "Sweet Tooth perk",
          isActive: false,
        },
        {
          id: "lacu3rj9a8or38",
          talentPath: "hf498hgv803ujg",
          name: "leadership",
          label: "Leadership influence",
          isActive: false,
        },
      ],
    },
    {
      id: "kio1ucro13",
      name: "talent path 2",
      talents: [
        {
          id: "kvt209kv2p2vp",
          talentPath: "kio1ucro13",
          name: "water-resist",
          label: "Water Resistance buff",
          isActive: false,
        },
        {
          id: "ahsudhwew0fw3",
          talentPath: "kio1ucro13",
          name: "water-damage",
          label: "Water Damage buff",
          isActive: false,
        },
        {
          id: "kfo1k910v109j",
          talentPath: "kio1ucro13",
          name: "electric-damage",
          label: "Electric Damage buff",
          isActive: false,
        },
        {
          id: "kor0tuvj29020",
          talentPath: "kio1ucro13",
          name: "avoid-death",
          label: "Avoid Death - 1 Additional Revival",
          isActive: false,
        },
      ],
    },
  ],
};

export default function Home() {
  // it would be a async function fetching the talent tree.
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="items-center justify-between text-sm lg:flex w-full lg:w-auto">
        <TalentCalculator talentTree={TALENT_TREE_DATA_MOCK} />
      </div>
    </main>
  );
}
