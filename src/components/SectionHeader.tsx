import { FC } from "react";

interface SectionHeaderProps {
  heading: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ heading }) => {
  return (
    <h2 className="font-display text-center text-5xl leading-none text-[#fff4ef] mb-4 mt-8 md:text-6xl">
      {heading}
    </h2>
  );
};
export default SectionHeader;
