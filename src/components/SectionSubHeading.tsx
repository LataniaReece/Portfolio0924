import { FC } from "react";

interface SectionSubHeadingProps {
  subHeading: string;
}

const SectionSubHeading: FC<SectionSubHeadingProps> = ({ subHeading }) => {
  return (
    <p className="text-center text-lg font-light text-slate-200 tracking-wide mb-8">
      {subHeading}
    </p>
  );
};
export default SectionSubHeading;
