type Props = {
  text: string;
};

export default function SectionHeader({ text }: Props) {
  return (
    <h1 className="bg-gray-titan  text-2xl text-center py-1 bg-opacity-55">
      {text}
    </h1>
  );
}
