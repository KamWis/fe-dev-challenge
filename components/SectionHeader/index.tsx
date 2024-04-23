type Props = {
  text: string;
};

export default function SectionHeader({ text }: Props) {
  return (
    <h1 className="bg-gray-titan text-3xl text-center py-2 bg-opacity-40">
      {text}
    </h1>
  );
}
