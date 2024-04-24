import clsx from "clsx";
import "./styles.css";

type Props = {
  name: string;
  active: boolean;
};

export default function TalentIcon({ name, active, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx(`w-full h-full ${name} talent-icon-background`, {
        active,
      })}
    />
  );
}
