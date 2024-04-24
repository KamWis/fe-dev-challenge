import "./styles.css";

type Props = {
  name: string;
};

export default function TalentIcon({ name }: Props) {
  return <div className={`w-full h-full ${name} talent-icon-background `} />;
}
