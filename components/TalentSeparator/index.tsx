import clsx from "clsx";

type Props = {
  active: boolean;
};

export default function TalentSeparator({ active }: Props) {
  return (
    <div
      className={clsx(
        "h-[50px] w-[16px] md:w-[109px] md:h-[16px] bg-gray-titan border-y-2 border-y-zinc-600 transition-all",
        {
          "border-opacity-40": active,
          "border-opacity-10 bg-opacity-50": !active,
        }
      )}
    />
  );
}
