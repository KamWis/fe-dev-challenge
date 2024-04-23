import Image from "next/image";

export default function TalentCalculator() {
  return (
    <div className="lg:w-[998px] w-full lg:h-[373px] h-auto">
      <div className="z-0 relative w-full h-full">
        <Image
          src="/talent-calc-bg.png"
          alt="Talent calculator background"
          className="object-cover"
          fill
          quality={100}
        />
      </div>
      <div className="z-10 relative w-full h-full">
        <h1>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
      </div>
    </div>
  );
}
