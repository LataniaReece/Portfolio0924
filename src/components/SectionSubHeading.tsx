import { FC } from "react";

interface SectionSubHeadingProps {
  subHeading: string;
}

const SectionSubHeading: FC<SectionSubHeadingProps> = ({ subHeading }) => {
  return (
    <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-8 text-slate-300">
      {subHeading}
    </p>
  );
};
export default SectionSubHeading;
