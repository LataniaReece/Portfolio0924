import { FC } from "react";

interface SectionHeaderProps {
  heading: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ heading }) => {
  return (
    <h2 className="text-center text-4xl font-semibold text-slate-50 tracking-wider mb-4 mt-8">
      {heading}
    </h2>
  );
};
export default SectionHeader;
