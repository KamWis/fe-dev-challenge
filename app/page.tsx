import Image from "next/image";

import TalentCalculator from "@/components/TalentCalculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="items-center justify-between text-sm lg:flex w-full lg:w-auto">
        <TalentCalculator />
      </div>
    </main>
  );
}
